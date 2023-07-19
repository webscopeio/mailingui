import { readdirSync } from "fs";
import { join } from "path";
import { Metadata } from "next";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
} from "../../docs/constants";
import { PreviewNavigation, PreviewShell } from "@components/EmailPreview";

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
  const files = getFiles();
  return (
    <PreviewShell files={files}>
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

const getFiles = () => {
  const CONTENT_DIR = "src/emails";
  const typePath = join(process.cwd(), CONTENT_DIR);
  const files = readdirSync(typePath);
  return files.map((file) => ({
    id: file.replace(/.tsx/, ""),
    fileName: file,
  }));
};
