import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PagingNav } from "@components/PagingNav";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
  flattenedDocsItems,
} from "@constants";
import { DocArticle } from "@components/MdxComponents";
import { mdxDocs } from "src/docs/content/components";
import { componentTypes } from "@examples";

type ComponentPageProps = {
  params: {
    type: string;
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

export function generateMetadata({
  params: { type },
}: ComponentPageProps): Metadata {
  const doc = findPageDocItem(["components", type]);

  const title = doc?.label ?? "Components";
  const description = doc?.description ?? "Explore components";

  return {
    title,
    description,
    openGraph: {
      ...sharedOpenGraphMetadata,
      title,
      description,
      url: "https://mailingui.com/components",
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
  params: { type },
}: ComponentPageProps) {
  const MdxDoc = mdxDocs?.[type];
  if (!MdxDoc) notFound();

  const { prev, next } = findNeighbours(["components", type]);

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
  componentTypes.map((item) => ({ type: item.type }));
