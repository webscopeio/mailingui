import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { notFound } from "next/navigation";
import { render } from "@react-email/render";
import { getHighlighter, highlight } from "@lib/shiki";
import { ComponentExampleProps } from "@components/ComponentExample";
import { componentTypes } from "@examples";
import { ComponentSourceTabsProps } from "@components/InstallationDocs/ComponentSourceTabs";

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
export const getDemo = async (type: string): Promise<ComponentExampleProps> => {
  // Throws if component isn't registered
  const component = getComponentData(type);

  // Create directory path for component type
  const demoPath = join(process.cwd(), CONTENT_DIR, component.type, "Demo.tsx");

  // Initiate instance of highlighter
  const highlighter = await getHighlighter();

  const data = readFileSync(demoPath, "utf8");

  const Component = (
    await import(`src/docs/examples/${component.type}/Demo.tsx`)
  ).default;

  const html = render(<Component />, { pretty: true });
  const plainText = render(<Component />, { plainText: true });

  const source = await highlight(highlighter, data);
  const markup = await highlight(highlighter, html, "html");

  return { id: "Demo", html, source, markup, plainText, type: component.type };
};

export const getComponentSource = async (componentType: string) => {
  const component = getComponentData(componentType);
  const componentTypeSingular = component.type.replace(/s$/, "");
  const typePath = join(process.cwd(), SOURCE_DIR, componentTypeSingular);
  const files = readdirSync(typePath).filter((file) => file.endsWith(".tsx"));
  const highlighter = await getHighlighter();

  return await Promise.all(
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
};
