import type { Metadata } from "next";

import { docsItems } from "@constants";
import { mdxDocs } from "src/docs/content";
import { DocArticle } from "@components/InstallationDocs";

type DocsPageProps = {
  params: {
    slug: string[];
  };
};

type MetadataProps = {
  params: {
    slug: string[];
  };
};

function findPageDocItem(slug: string[]) {
  const resolvedHref = ["/docs", ...slug].join("/");
  const flattenedDocsItems = docsItems.reduce((acc, item) => {
    if (item.items) acc.push(...item.items);
    return acc;
  }, [] as (typeof docsItems)[0]["items"]);
  const docItem = flattenedDocsItems.find((item) => item.href === resolvedHref);
  return docItem;
}

export function generateMetadata({ params }: MetadataProps): Metadata {
  const doc = findPageDocItem(params.slug);

  const title = doc?.label ?? "Documentation";
  const description = doc?.description ?? "Explore docs";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://mailingui.com/docs",
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
