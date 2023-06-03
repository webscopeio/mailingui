import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { render } from "@react-email/render";
import { format } from "prettier";
import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";
import { emailComponents } from "@constants";
import { getHighlighter, highlight } from "@lib/shiki";

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
    <div className="mx-auto w-full max-w-[900px] overflow-x-hidden px-4">
      <h1 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
        {component.title}
      </h1>
      <div className="mt-8 space-y-16 md:mt-16">
        {component.examples.map(({ ...example }, index) => (
          <ComponentExample key={index} {...example} />
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
  const component = emailComponents.find((c) => c.type === type);
  if (!component) {
    return notFound();
  }
  return component;
};

const CONTENT_DIR = "src/email-components";

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

  const componentsData = files
    .reduce((result: { id: string; preview: string, source: string }[], file: string) => {
      const id = file.replace(/(\.preview)?\.tsx$/, '');
      const existingItem = result.find(item => item.source === id);

      const fileData = format(readFileSync(join(typePath, file), "utf8"), { parser: "typescript" });

      if (file.includes('.preview.tsx')) {
        existingItem
          ? (existingItem.preview = fileData)
          : result.push({ id, preview: fileData, source: id });
      } else {
        existingItem
          ? (existingItem.source = fileData)
          : result.push({ id, source: fileData, preview: '' });
      }

      return result;
    }, [])
    .filter(item => item.preview && item.source);

  const highlighter = await getHighlighter();

  const examples = await Promise.all(componentsData.map(async (item) => {
    const Component = (await import(`src/email-components/${component.type}/${item.id}.preview`)).default;
    const markup = format(render(<Component />, { pretty: true }), { parser: "html" });
    const preview = await highlight(highlighter, item.preview);
    const source = await highlight(highlighter, item.source);
    const plainText = render(<Component />, { plainText: true });
    return ({
      id: item.id,
      markup,
      preview,
      source,
      plainText
    })
  }))


  return {
    title: component.title,
    examples,
  };
};

export const generateStaticParams = () =>
  emailComponents.map((item) => ({ type: item.type }));
