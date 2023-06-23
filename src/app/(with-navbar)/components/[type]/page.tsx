import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "prettier";
import { render } from "@react-email/render";
import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

import { getHighlighter, highlight } from "@lib/shiki";
import { componentTypes } from "@examples";

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
  const component = await getComponent(type);

  return (
    <div className="mx-auto w-full max-w-[900px] overflow-hidden px-4">
      <h1 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
        {component.title}
      </h1>
      <div className="mt-8 space-y-16 md:mt-16">
        {component.examples.map(({ ...example }, index) => (
          <ComponentExample key={index} {...example} type={type} />
        ))}
      </div>
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

const CONTENT_DIR = "src/docs/examples";

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
  const files = readdirSync(typePath);

  // Initiate instance of highlighter
  const highlighter = await getHighlighter();

  const examples = await Promise.all(
    files.map(async (file) => {
      const id = file.replace(/.tsx/, "");

      const data = format(readFileSync(join(typePath, file), "utf8"), {
        parser: "typescript",
      });
      const Component = (
        await import(`src/docs/examples/${component.type}/${id}`)
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
