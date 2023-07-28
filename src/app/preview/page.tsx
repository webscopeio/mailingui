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

export default async function Preview() {
  const fileTree = getPreviewTree();
  return (
    <PreviewShell fileTree={fileTree}>
      <PreviewNavigation />
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-dark-300">
        <p className="p-4 text-center">
          Select email template <b>category</b> and get started
        </p>
      </div>
    </PreviewShell>
  );
}
