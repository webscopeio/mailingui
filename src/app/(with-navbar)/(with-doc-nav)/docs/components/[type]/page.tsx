import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { render } from "@react-email/render";

import { PagingNav } from "@components/PagingNav";
import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

import { getHighlighter, highlight } from "@lib/shiki";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
  flattenedDocsItems,
} from "src/docs/constants";
import { CONTENT_DIR, DocArticle } from "@components/InstallationDocs";
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
  const componentExamples = await getComponent(type);

  const MdxDoc = mdxDocs?.[type];
  const Docs = MdxDoc ? (
    <DocArticle>
      <MdxDoc />
    </DocArticle>
  ) : null;

  const { prev, next } = findNeighbours(["components", type]);

  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden px-4">
      {Docs}
      <h2 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
        {componentExamples.title}
      </h2>
      <div className="mt-8 space-y-16 md:mt-16">
        {componentExamples.examples.map(({ ...example }, index) => (
          <ComponentExample key={index} {...example} type={type} />
        ))}
      </div>
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

/**
 * Maps over examples, translates them to html, and puts them together.
 * @param type - A type of component. Same as `type` param of the page.
 * @returns An object containing component title and array of component examples in React.
 */
const getComponent = async (
  type: string
): Promise<{
  title: string;
  examples: ComponentExampleProps[];
}> => {
  // Throws if component isn't registered
  const component = getComponentData(type);

  // Create directory path for component type
  const typePath = join(process.cwd(), CONTENT_DIR, component.type);

  // Read all the files in that dir
  const files = readdirSync(typePath)
    .filter((file) => file.endsWith(".tsx"))
    .filter((file) => file !== "Demo.tsx");

  // Initiate instance of highlighter
  const highlighter = await getHighlighter();

  const examples = await Promise.all(
    files.map(async (file) => {
      const id = file.replace(/.tsx/, "");

      const data = readFileSync(join(typePath, file), "utf8");
      const Component = (
        await import(`src/docs/examples/${component.type}/${id}.tsx`)
      ).default;

      const html = render(<Component />, { pretty: true });
      const plainText = render(<Component />, { plainText: true });

      const source = await highlight(highlighter, data);
      const markup = await highlight(highlighter, html, "html");
      return {
        id,
        html,
        source,
        markup,
        plainText,
        type: component.type,
      };
    })
  );

  return {
    title: component.title,
    examples,
  };
};

export const generateStaticParams = () =>
  componentTypes.map((item) => ({ type: item.type }));
