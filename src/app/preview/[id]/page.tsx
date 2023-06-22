import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { render } from "@react-email/render";
import { format } from "prettier";
import juice from "juice";
import { PreviewPane } from "@components/EmailPreview";
import { getHighlighter, highlight } from "@lib/shiki";

export default async function PreviewId({
  params,
}: {
  params: { id: string };
}) {
  const data = await getPreviewData(params.id);

  return <PreviewPane id={params.id} data={data} />;
}

const getPreviewData = async (id: string) => {
  const highlighter = await getHighlighter();
  const CONTENT_DIR = "src/emails";
  const typePath = join(process.cwd(), CONTENT_DIR);
  const data = format(readFileSync(join(typePath, id + ".tsx"), "utf8"), {
    parser: "typescript",
  });
  const Component = (await import(`src/emails/${id + ".tsx"}`)).default;

  const html = format(render(<Component />, { pretty: true }), {
    parser: "html",
  });
  const plainText = render(<Component />, { plainText: true });

  const htmlWithInlineStyles = juice(html, { removeStyleTags: false });

  const source = await highlight(highlighter, data);
  const markup = await highlight(highlighter, htmlWithInlineStyles, "html");
  return {
    id,
    html,
    source,
    markup,
    plainText,
  };
};

const getFiles = () => {
  const CONTENT_DIR = "src/emails";
  const typePath = join(process.cwd(), CONTENT_DIR);
  const files = readdirSync(typePath);
  return files.map((file) => ({
    id: file.replace(/.tsx/, ""),
  }));
};

export function generateStaticParams() {
  const files = getFiles();
  return files.map(({ id }) => ({ id }));
}
