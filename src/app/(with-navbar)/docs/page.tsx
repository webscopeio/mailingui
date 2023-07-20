import type { Metadata } from "next";
import Link from "next/link";
import { ComponentsPreview } from "@components/ComponentsPreview";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
} from "src/docs/constants";
import { DocArticle } from "@components/InstallationDocs";
import MdxDoc from "@examples/installation.mdx";

export const metadata: Metadata = {
  title: "Components",
  description: "Explore components",
  openGraph: {
    ...sharedOpenGraphMetadata,
    title: "Components",
    description: "Explore components",
    url: "https://mailingui.com/components",
    images: [
      {
        ...openGraphImageSize,
        url: "/static/images/og/components.png",
      },
    ],
  },
};

const Components = async () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {MdxDoc && (
        <DocArticle>
          <MdxDoc />
        </DocArticle>
      )}
      <h2
        className="group flex items-center gap-4 pt-8 text-2xl font-semibold md:pt-16 md:text-4xl"
        id="components"
      >
        <a
          href="#components"
          className="after:ml-3 after:inline-block after:opacity-80 hover:after:content-['#']"
        >
          Components
        </a>
      </h2>
      <div className="mt-8 md:mt-16">
        <ComponentsPreview preloadImages={true} />
      </div>
    </div>
  );
};

export default Components;
