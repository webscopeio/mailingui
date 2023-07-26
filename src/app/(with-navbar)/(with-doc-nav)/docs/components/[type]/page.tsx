import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PagingNav } from "@components/PagingNav";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
  flattenedDocsItems,
} from "src/docs/constants";
import { DocArticle } from "@components/MdxComponents";
import { mdxDocs } from "src/docs/content/components";
import { componentTypes } from "@examples";

type ComponentPageProps = {
  params: {
    type: string;
  };
};

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
  const component = getComponentData(type);
  return {
    ...sharedOpenGraphMetadata,
    title: component?.title ?? "Components",
    description: "Explore components",
    openGraph: {
      title: component?.title ?? "Components",
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

/**
 * Finds a match for the component type or calls a navigation error
 * @param type - A type of component. Same as `type` param of the page.
 * @returns an object containing the email component
 */
const getComponentData = (type: string) => {
  const component = componentTypes.find((c) => c.type === type);
  if (!component) {
    return notFound();
  }
  return component;
};

export const generateStaticParams = () =>
  componentTypes.map((item) => ({ type: item.type }));
