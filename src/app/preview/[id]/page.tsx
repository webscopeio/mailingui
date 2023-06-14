import { readFileSync } from "fs";
import { join } from "path";
import { render } from "@react-email/render";
import { format } from "prettier";
import { PreviewNavigation } from "../components/PreviewNavigation";
import { getHighlighter, highlight } from "@lib/shiki";
import { ComponentExample } from "@components/ComponentExample";

export default async function PreviewId({
  params,
}: {
  params: { id: string };
}) {
  const data = await getPreviewData(params.id);

  return (
    <>
      <PreviewNavigation html={data.html} />
      <div className="flex h-full w-full items-center justify-center bg-white px-8 py-4">
        <ComponentExample previewMode {...data} type={"button"} />
      </div>
    </>
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
