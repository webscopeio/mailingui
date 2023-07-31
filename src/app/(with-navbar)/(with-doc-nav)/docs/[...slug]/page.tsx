import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PagingNav } from "@components/PagingNav";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
  flattenedDocsItems,
} from "@constants";
import { mdxDocs } from "src/docs/content";
import { DocArticle } from "@components/MdxComponents";

type DocsPageProps = {
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

export function generateMetadata({ params }: DocsPageProps): Metadata {
  const doc = findPageDocItem(params.slug);
  const isComponents =
    params.slug[0] === "components" && params.slug.length === 2;

  const title = doc?.label ?? (isComponents ? "Components" : "Documentation");
  const description =
    doc?.description ?? (isComponents ? "Explore components" : "Explore docs");

  return {
    title,
    description,
    openGraph: {
      ...sharedOpenGraphMetadata,
      title,
      description,
      url: "https://mailingui.com/docs",
      images: [
        {
          ...openGraphImageSize,
          url: "/static/images/og/components.png",
        },
      ],
    },
  };
}

export default async function ComponentPage({
  params: { slug },
}: DocsPageProps) {
  const resolvedSlug = slug.join("/");
  const MdxDoc = mdxDocs?.[resolvedSlug];
  if (!MdxDoc) notFound();

  const { prev, next } = findNeighbours(slug);

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden p-4 lg:py-0">
      <DocArticle>
        <MdxDoc />
      </DocArticle>
      <PagingNav prev={prev} next={next} className="mt-8" />
    </div>
  );
}

export const generateStaticParams = () =>
  flattenedDocsItems.map((item) => ({
    slug: item.href.split("/").slice(2), // remove the first empty string and docs from href (only rest of href relevant for slug)
  }));
