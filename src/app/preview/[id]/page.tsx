import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { format } from "prettier";
import { render } from "@react-email/render";
import { PreviewPane, PreviewShell } from "@components/EmailPreview";
import { getHighlighter, highlight } from "@lib/shiki";

export default async function PreviewId({
  params,
}: {
  params: { id: string };
}) {
  const files = getFiles();
  const data = await getPreviewData(params.id);

  return (
    <PreviewShell files={files} paramsId={params.id}>
      <PreviewPane id={params.id} data={data} />
    </PreviewShell>
  );
}

const getPreviewData = async (id: string) => {
  const highlighter = await getHighlighter();
  const CONTENT_DIR = "src/emails";
  const typePath = join(process.cwd(), CONTENT_DIR);
  const data = format(readFileSync(join(typePath, id + ".tsx"), "utf8"), {
    parser: "typescript",
  });
  const Component = (await import(`src/emails/${id + ".tsx"}`)).default;

  const html = render(<Component />, { pretty: true });
  const plainText = render(<Component />, { plainText: true });

  const source = await highlight(highlighter, data);
  const markup = await highlight(highlighter, html, "html");
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
    fileName: file,
  }));
};

export function generateStaticParams() {
  const files = getFiles();
  return files.map(({ id }) => ({ id }));
}
