import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import mjml2html from "mjml";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { render } from "@react-email/render";
import { format } from "prettier";
import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";
import { emailComponents, regex } from "@constants";

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

type ComponentInfo = {
  id: string;
  mjmlFile?: string;
  reactFile?: string;
};

/**
 * Maps over examples, translates them to html, and puts them together.
 * @param type - A type of component. Same as `type` param of the page.
 * @returns An object containing component title and array of component examples in mjml and React.
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

  const components: ComponentInfo[] = files.reduce(
    (result: ComponentInfo[], file: string) => {
      const [id, extension] = file.split(".");

      const componentIndex = result.findIndex(
        (component: ComponentInfo) => component.id === id
      );

      if (componentIndex === -1) {
        // Component doesn't exist in the result array, create a new entry
        const component: ComponentInfo = {
          id,
        };

        if (extension === "mjml") {
          component.mjmlFile = file;
        }

        if (extension === "tsx" || extension === "jsx") {
          component.reactFile = file;
        }

        result.push(component);
      } else {
        // Component already exists in the result array, update it
        if (extension === "mjml") {
          result[componentIndex].mjmlFile = file;
        }
        if (extension === "tsx" || extension === "jsx") {
          result[componentIndex].reactFile = file;
        }
      }

      return result;
    },
    []
  );

  const examples: ComponentExampleProps[] = await Promise.all(
    components.map(async ({ id, mjmlFile, reactFile }) => {
      const { preferColorScheme, colorScheme, supportedColorScheme } = regex;

      const example: ComponentExampleProps = {
        title: id,
        html: "",
        mjml: "",
        react: "",
      };

      if (mjmlFile) {
        example.mjml = readFileSync(join(typePath, mjmlFile), "utf8");

        example.html = format(mjml2html(example.mjml, {
          validationLevel: "strict",
          keepComments: false,
        }).html, { parser: "html" });
      }

      if (reactFile) {
        example.react = readFileSync(join(typePath, reactFile), "utf8");
        const ReactComponent = (
          await import(
            `${"src/email-components"}/${component.type}/${reactFile}`
          )
        ).default;
        example.html = format(render(<ReactComponent />, { pretty: true }), { parser: "html" });
      }

      const hasDarkMode = preferColorScheme.test(example.html);

      /** Early return if no media queries were found */
      if (!hasDarkMode) {
        return {
          ...example,
          hasDarkMode: false,
        };
      }

      /** To avoid background flashes, find and replace CSS color-schemes */
      const htmlLight = example.html
        .replaceAll(colorScheme, "color-scheme: light;")
        .replaceAll(supportedColorScheme, "supported-color-schemes: light;")
        .replaceAll(preferColorScheme, "");

      const htmlDark = example.html
        .replaceAll(colorScheme, "color-scheme: dark;")
        .replaceAll(supportedColorScheme, "supported-color-schemes: dark;")
        .replaceAll(preferColorScheme, "$1");

      return {
        ...example,
        hasDarkMode: true,
        transformedHtml: {
          light: htmlLight,
          dark: htmlDark,
        },
      };
    })
  );

  return {
    title: component.title,
    examples,
  };
};

export const generateStaticParams = () =>
  emailComponents.map((item) => ({ type: item.type }));
