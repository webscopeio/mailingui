import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { render } from "@react-email/render";
import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

import { getHighlighter, highlight } from "@lib/shiki";
import { getInstallationDoc } from "@lib/mdx";
import {
  InstallationDocsMdxComponents,
  DocArticle,
  DocTypography,
  ComponentSourceProps,
} from "@components/InstallationDocs";
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
  const componentExamples = await getComponent(type);
  const componentsSource = await getComponentSource(type);

  const mdxDoc = await getInstallationDoc({
    componentType: type,
    components: InstallationDocsMdxComponents,
    scope: {
      componentsSource: componentsSource.sources,
      dependenciesSource: componentsSource.dependencies,
      examples: componentExamples.examples,
      demo: componentExamples.demo,
    },
  });

  return (
    <div className="mx-auto w-full max-w-[900px] overflow-hidden p-4">
      {mdxDoc && (
        <>
          <header className="my-8 grid gap-y-4">
            <DocTypography.H1>{mdxDoc.frontmatter.title}</DocTypography.H1>
            <DocTypography.P>{mdxDoc.frontmatter.description}</DocTypography.P>
          </header>
          <DocArticle>{mdxDoc.content}</DocArticle>
        </>
      )}
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
const SOURCE_DIR = "src/mailingui/components";

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
  demo: ComponentExampleProps;
}> => {
  // Throws if component isn't registered
  const component = getComponentData(type);

  // Create directory path for component type
  const typePath = join(process.cwd(), CONTENT_DIR, component.type);

  // Read all the files in that dir
  const files = readdirSync(typePath).filter((file) => file.endsWith(".tsx"));

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

  const demoIndex = examples.findIndex((example) => example.id === "Demo");
  const demo = examples.splice(demoIndex, 1)[0]; // Remove demo example from the list and save it

  return {
    title: component.title,
    examples,
    demo,
  };
};

const getComponentSource = async (
  componentType: string
): Promise<{
  title: string;
  sources: ComponentSourceProps[];
  dependencies: ComponentSourceProps[];
}> => {
  const component = getComponentData(componentType);
  const componentTypeSingular = component.type.replace(/s$/, "");
  const typePath = join(process.cwd(), SOURCE_DIR, componentTypeSingular);
  const files = readdirSync(typePath).filter((file) => file.endsWith(".tsx"));
  const highlighter = await getHighlighter();

  const allSources = await Promise.all(
    files.map(async (file) => {
      const id = file.replace(/.tsx/, "");

      const data = readFileSync(join(typePath, file), "utf8");
      const source = await highlight(highlighter, data);
      return {
        id,
        source,
        type: component.type,
      };
    })
  );

  const dependenciesList = component.dependencies ?? [];
  const allDependencies = await Promise.all(
    dependenciesList.map(async (dependency) => {
      const [dependencyType, dependencyFile] = dependency.split("/");
      const dependencyPath = join(
        process.cwd(),
        SOURCE_DIR,
        dependencyType,
        dependencyFile + ".tsx"
      );

      const data = readFileSync(dependencyPath, "utf8");
      const source = await highlight(highlighter, data);
      return {
        id: dependencyFile,
        source,
        type: component.type,
      };
    })
  );

  return {
    title: component.title,
    sources: allSources,
    dependencies: allDependencies,
  };
};

export const generateStaticParams = () =>
  componentTypes.map((item) => ({ type: item.type }));
