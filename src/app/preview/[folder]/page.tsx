import { Metadata } from "next";
import { openGraphImageSize, sharedOpenGraphMetadata } from "@constants";
import { PreviewNavigation, PreviewShell } from "@components/EmailPreview";
import { getPreviewFileTree } from "@utils/emailPreview";

export const metadata: Metadata = {
  title: "Preview",
  description: "Preview email templates",
  openGraph: {
    ...sharedOpenGraphMetadata,
    title: "Preview",
    description: "Preview email templates",
    url: "https://mailingui.com/preview",
    images: [
      {
        ...openGraphImageSize,
        url: "/static/images/og/preview.png",
      },
    ],
  },
};

export default async function PreviewFolder({
  params,
}: {
  params: { folder: string };
}) {
  const fileTree = getPreviewFileTree();
  return (
    <PreviewShell fileTree={fileTree} folderId={params.folder}>
      <PreviewNavigation />
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-dark-300">
        <p className="p-4 text-center">
          Select <b>email template</b> from category and get started
        </p>
      </div>
    </PreviewShell>
  );
}

export function generateStaticParams() {
  const fileTree = getPreviewFileTree();
  return fileTree.map(({ id: folderId }) => ({ folder: folderId }));
}
