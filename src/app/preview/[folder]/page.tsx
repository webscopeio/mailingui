import { Metadata } from "next";
import { openGraphImageSize, sharedOpenGraphMetadata } from "@constants";
import { PreviewNavigation, PreviewShell } from "@components/EmailPreview";
import { getPreviewTree } from "@utils/preview";

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
  const fileTree = getPreviewTree();
  return (
    <PreviewShell fileTree={fileTree} folderId={params.folder}>
      <PreviewNavigation />
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-dark-300">
        <p className="p-4 text-center">
          Create email templates in{" "}
          <code className="mx-2 inline-flex">`src/emails`</code> and get started
        </p>
      </div>
    </PreviewShell>
  );
}

export function generateStaticParams() {
  const fileTree = getPreviewTree();
  return fileTree.map(({ id: folderId }) => ({ folder: folderId }));
}
