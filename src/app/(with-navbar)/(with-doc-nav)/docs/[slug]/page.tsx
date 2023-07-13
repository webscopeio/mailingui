import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { MDXProps } from "mdx/types";
import { ComponentType } from "react";

import { DocArticle } from "@components/InstallationDocs";

type DocsPageProps = {
  params: {
    slug: string;
  };
};

const docs: Record<string, ComponentType<MDXProps>> = {
  overview: dynamic(() => import(`src/docs/pages/Overview.mdx`)),
  "getting-started": dynamic(() => import(`src/docs/pages/GettingStarted.mdx`)),
  installation: dynamic(() => import(`src/docs/pages/Installation.mdx`)),
  theming: dynamic(() => import(`src/docs/pages/Theming.mdx`)),
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
  const MdxDoc = docs?.[slug];
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
  Object.keys(docs).map((item) => ({ slug: item }));
