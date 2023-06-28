import type { Metadata } from "next";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { getInstallationDoc } from "@lib/mdx";
import {
  InstallationDocsMdxComponents,
  DocArticle,
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
    // @ts-expect-error async component
    components: InstallationDocsMdxComponents,
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      {mdxDoc && (
        <>
          <header className="grid gap-y-4 py-8">
            <h1 className="text-2xl font-semibold md:text-6xl">
              {mdxDoc.frontmatter.title}
            </h1>
            <p className="font-semibold text-neutral-500 md:text-xl">
              {mdxDoc.frontmatter.description}
            </p>
          </header>
          <DocArticle>{mdxDoc.content}</DocArticle>
        </>
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
