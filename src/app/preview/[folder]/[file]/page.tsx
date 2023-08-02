import { render } from "@react-email/render";
import { notFound } from "next/navigation";
import { PreviewPane, PreviewShell } from "@components/EmailPreview";
import { getHighlighter, highlight } from "@lib/shiki";
import { getPreviewFileTree, getEmailContent } from "@utils/emailPreview";

export default async function PreviewFile({
  params,
}: {
  params: { file: string; folder: string };
}) {
  const fileTree = getPreviewFileTree();
  const data = await getPreviewData(params.folder, params.file);
  if (!data) notFound();

  const id = `${params.folder}/${params.file}`;

  return (
    <PreviewShell
      fileTree={fileTree}
      folderId={params.folder}
      fileId={params.file}
    >
      <PreviewPane id={id} data={data} />
    </PreviewShell>
  );
}

const getPreviewData = async (folder: string, file: string) => {
  const emailContent = getEmailContent(folder, file);
  if (!emailContent) return;
  const highlighter = await getHighlighter();
  const Component = (await import(`src/emails/${folder}/${file + ".tsx"}`))
    .default;

  const html = render(<Component />, { pretty: true });
  const plainText = render(<Component />, { plainText: true });

  const source = await highlight(highlighter, emailContent);
  const markup = await highlight(highlighter, html, "html");
  return {
    id: file,
    html,
    source,
    markup,
    plainText,
  };
};

export function generateStaticParams() {
  const fileTree = getPreviewFileTree();
  return fileTree.flatMap(({ files, id: folderId }) =>
    files.map((file) => ({ file: file.id, folder: folderId }))
  );
}