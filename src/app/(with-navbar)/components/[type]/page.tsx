import { readdirSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

import {
  CONTENT_DIR,
  DocArticle,
  getComponentData,
  getComponentExampleProps,
} from "@components/InstallationDocs";
import { componentTypes, mdxDocs } from "@examples";

type ComponentPageProps = {
  params: {
    type: string;
  };
};

export function generateMetadata({
  params: { type },
}: ComponentPageProps): Metadata {
  const component = getComponentData(type);
  return {
    title: component?.title ?? "Components",
    description: "Explore components",
    openGraph: {
      title: component?.title ?? "Components",
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
  params: { type },
}: ComponentPageProps) {
  const componentExamples = await getComponent(type);

  const MdxDoc = mdxDocs?.[type];
  const Docs = MdxDoc ? (
    <DocArticle>
      <MdxDoc />
    </DocArticle>
  ) : null;

  return (
    <div className="mx-auto w-full max-w-[900px] overflow-hidden p-4">
      {Docs}
      <h2 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
        {componentExamples.title}
      </h2>
      <div className="mt-8 space-y-16 md:mt-16">
        {componentExamples.examples.map(({ ...example }, index) => (
          <ComponentExample key={index} {...example} type={type} />
        ))}
      </div>
    </div>
  );
}

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
    .filter((file) => file !== "Demo.tsx")
    .map((file) => file.replace(".tsx", ""));

  const examples = await Promise.all(
    files.map((file) => getComponentExampleProps(type, file))
  );

  return {
    title: component.title,
    examples,
  };
};

export const generateStaticParams = () =>
  componentTypes.map((item) => ({ type: item.type }));
