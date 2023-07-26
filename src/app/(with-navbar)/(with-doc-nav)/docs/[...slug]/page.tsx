import type { Metadata } from "next";

import { PagingNav } from "@components/PagingNav";
import { flattenedDocsItems } from "@constants";
import { mdxDocs } from "src/docs/content";
import { DocArticle } from "@components/MdxComponents";

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
  const docItem = flattenedDocsItems.find((item) => item.href === resolvedHref);
  return docItem;
}

function findNeighbours(slug: string[]) {
  const resolvedHref = ["/docs", ...slug].join("/");
  const currentIndex = flattenedDocsItems.findIndex(
    (item) => item.href === resolvedHref
  );
  const prev = currentIndex !== 0 ? flattenedDocsItems[currentIndex - 1] : null;
  const next =
    currentIndex !== flattenedDocsItems.length - 1
      ? flattenedDocsItems[currentIndex + 1]
      : null;
  return {
    prev,
    next,
  };
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

  const { prev, next } = findNeighbours(slug);

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden p-4 lg:py-0">
      {Docs}
      <PagingNav prev={prev} next={next} className="mt-8" />
    </div>
  );
}

export const generateStaticParams = () =>
  Object.keys(mdxDocs).map((item) => ({
    slug: item.split("/"),
  }));
