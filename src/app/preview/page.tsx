import { PreviewNavigation, PreviewShell } from "@components/EmailPreview";
import { readdirSync } from "fs";
import { Metadata } from "next";
import { join } from "path";
import { sharedOpenGraphMetadata } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Preview",
  description: "Preview email templates",
  openGraph: {
    ...sharedOpenGraphMetadata,
    title: "Preview",
    description: "Preview email templates",
    url: "https://mailingui.com/preview",
    // images: [ TODO: Image
    //   {
    //     ...openGraphImageSize,
    //     url: "/static/images/og/",
    //   },
    // ],
  },
};

export default async function Preview() {
  const files = getFiles();
  return (
    <PreviewShell files={files}>
      <PreviewNavigation />
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-dark-300">
        <p className="text-center">
          Create email templates in{" "}
          <code className="mx-2 inline-flex">`src/emails`</code> and get started
        </p>
        <p>
          Also please change your email for testing in{" "}
          <code className="mx-2 inline-flex">`PreviewNavigation.tsx`</code>
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
