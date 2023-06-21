import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { render } from "@react-email/render";
import { format } from "prettier";
import { PreviewPane } from "../components/PreviewPane";
import { getHighlighter, highlight } from "@lib/shiki";

export default async function PreviewId({
  params,
}: {
  params: { id: string };
}) {
  const startTime = performance.now();
  const data = await getPreviewData(params.id);

  const retVal = <PreviewPane id={params.id} data={data} />;
  const endTime = performance.now();
  // eslint-disable-next-line no-console
  console.log(`Preview Page id: ${params.id} - 'rendering' took ${endTime - startTime}ms`);

  return retVal;
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
  }));
};

export function generateStaticParams() {
  const files = getFiles();
  return files.map(({ id }) => ({ id }));
}
