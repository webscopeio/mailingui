import { readFileSync } from "fs";
import { join } from "path";

import { format } from "prettier";
import { render } from "@mailingui/utils";
import { getHighlighter, highlight } from "@lib/shiki";

import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

const CONTENT_DIR = "src/docs/examples";

export const InstallationDemo = async ({
  componentKey,
}: {
  componentKey: string;
}) => {
  const componentData = await getComponent(componentKey);

  return <ComponentExample {...componentData} />;
};

const getComponent = async (
  componentKey: string
): Promise<ComponentExampleProps> => {
  const file = "Demo.tsx";
  const typePath = join(process.cwd(), CONTENT_DIR, componentKey);

  const id = file.replace(/.tsx/, "");

  const data = format(readFileSync(join(typePath, file), "utf8"), {
    parser: "typescript",
  });
  const Component = (await import(`src/docs/examples/${componentKey}/Demo.tsx`))
    .default;

  const html = format(render(<Component />, { pretty: true }), {
    parser: "html",
  });
  const plainText = render(<Component />, { plainText: true });

  // Initiate instance of highlighter
  const highlighter = await getHighlighter();
  const source = await highlight(highlighter, data);
  const markup = await highlight(highlighter, html, "html");
  return {
    id,
    html,
    source,
    markup,
    plainText,
    type: componentKey,
  };
};
