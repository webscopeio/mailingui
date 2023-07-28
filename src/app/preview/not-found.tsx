import Image from "next/image";
import { PreviewNavigation, PreviewShell } from "@components/EmailPreview";
import { getPreviewFileTree } from "@utils/emailPreview";

import notFoundImage from "public/static/images/not-found.png";

export default function PreviewNotFound() {
  const fileTree = getPreviewFileTree();
  return (
    <PreviewShell fileTree={fileTree}>
      <PreviewNavigation />
      <div className="grid h-full w-full place-content-center place-items-center gap-4 bg-dark-300 px-4">
        <div className="max-w-md">
          <Image
            src={notFoundImage}
            alt="Homepage hero image"
            quality={100}
            priority={true}
          />
        </div>

        <p className="font-semibold">
          Please select available template from templates navigation.
        </p>
      </div>
    </PreviewShell>
  );
}
