import type { Metadata } from "next";

import { mdxDocs } from "src/docs/content";
import { DocArticle } from "@components/InstallationDocs";

type DocsPageProps = {
  params: {
    slug: string[];
  };
};

export function generateMetadata(): Metadata {
  return {
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
}

export default async function ComponentPage({
  params: { slug },
}: DocsPageProps) {
  const resolvedSlug = slug.join("/");
  const MdxDoc = mdxDocs?.[resolvedSlug];
  const Docs = MdxDoc ? (
    <DocArticle>
      <MdxDoc />
    </DocArticle>
  ) : null;

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden p-4">{Docs}</div>
  );
}

export const generateStaticParams = () =>
  Object.keys(mdxDocs).map((item) => ({
    slug: item.split("/"),
  }));
