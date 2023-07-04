import type { Metadata } from "next";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { DocArticle } from "@components/InstallationDocs";
import MdxDoc from "@examples/installation.mdx";

export const metadata: Metadata = {
  title: "Components",
  description: "Explore components",
  openGraph: {
    title: "Components",
    description: "Explore components",
    url: "https://mailingui.com/components",
    images: [
      {
        url: "/static/images/og/components.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "MailingUI",
    locale: "en-US",
    type: "website",
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
      <h2 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
        Explore components
      </h2>
      <div className="mt-8 md:mt-16">
        <ComponentsPreview preloadImages={true} />
      </div>
    </div>
  );
};

export default Components;
