import type { Metadata } from "next";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { getInstallationDoc } from "@lib/mdx";
import {
  InstallationDocsMdxComponents,
  ProseArticle,
} from "@components/InstallationDocs";

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
  const mdxDoc = await getInstallationDoc({
    // TODO discuss approach, it works but probably not allowed to use async component by TS here
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    components: InstallationDocsMdxComponents,
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {mdxDoc && <ProseArticle>{mdxDoc.content}</ProseArticle>}
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
