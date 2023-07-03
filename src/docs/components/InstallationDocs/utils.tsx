import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { notFound } from "next/navigation";
import { render } from "@react-email/render";
import { getHighlighter, highlight } from "@lib/shiki";
import { ComponentExampleProps } from "@components/ComponentExample";
import { componentTypes } from "@examples";

export const CONTENT_DIR = "src/docs/examples";
export const SOURCE_DIR = "src/mailingui/components";

/**
 * Finds a match for the component type or calls a navigation error
 * @param type - A type of component. Same as `type` param of the page.
 * @returns an object containing the email component
 */
export const getComponentData = (type: string) => {
  const component = componentTypes.find((c) => c.type === type);
  if (!component) {
    return notFound();
  }
  return component;
};

export const getComponentExampleProps = async (
  type: string,
  id: string
): Promise<ComponentExampleProps> => {
  // Create directory path for component type
  const examplePath = join(process.cwd(), CONTENT_DIR, type, `${id}.tsx`);

  // Initiate instance of highlighter
  const highlighter = await getHighlighter();

  const data = readFileSync(examplePath, "utf8");

  const Component = (await import(`src/docs/examples/${type}/${id}.tsx`))
    .default;

  const html = render(<Component />, { pretty: true });
  const plainText = render(<Component />, { plainText: true });

  const source = await highlight(highlighter, data);
  const markup = await highlight(highlighter, html, "html");

  return { id, html, source, markup, plainText, type: type };
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
