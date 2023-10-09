import fs from "fs";
import { NextResponse } from "next/server";

/**
 * Supported Components that should be installable via CLI
 */
type supportedComponents =
  | "badge"
  | "button"
  | "grid"
  | "typography"
  | "markdown"
  | "icon-row";

// DO NOT MODIFY
type ComponentRegistry = Record<
  supportedComponents,
  {
    type: string;
    filename: string;
    dependencies: supportedComponents[];
    exports: string[];
    file?: string;
  }
>;

/**
 * Component Registry required for CLI
 */
const componentRegistry: ComponentRegistry = {
  badge: {
    type: "badge",
    filename: "Badge.tsx",
    dependencies: [],
    exports: ["Badge"],
  },
  button: {
    type: "button",
    filename: "Button.tsx",
    dependencies: [],
    exports: ["Button"],
  },
  grid: {
    type: "grid",
    filename: "Grid.tsx",
    dependencies: [],
    exports: ["Cell", "Grid"]
  },
  "icon-row": {
    type: "icon-row",
    filename: "IconRow.tsx",
    dependencies: ["typography"],
    exports: ["IconRow"],
  },
  typography: {
    type: "typography",
    filename: "Typography.tsx",
    dependencies: [],
    exports: [
      "Typography",
      "H1",
      "H2",
      "H3",
      "H4",
      "P",
      "Blockquote",
      "HR",
      "Code",
      "Link",
      "UL",
      "OL",
      "LI",
      "Img",
    ],
  },
  markdown: {
    type: "markdown",
    filename: "Markdown.tsx",
    dependencies: ["badge", "button", "typography"],
    exports: ["Markdown", "getMDXComponents"],
  },
};

// DO NOT MODIFY
const getComponents = (components: ComponentRegistry) => {
  return Object.entries(components).reduce(
    (res, [key, component]) => ({
      ...res,
      [key]: {
        ...component,
        file: fs.readFileSync(
          `./src/mailingui/components/${component.type}/${component.filename}`,
          "utf8"
        ),
      },
    }),
    {}
  );
};

export async function GET() {
  const components = getComponents(componentRegistry);
  return NextResponse.json({ components });
}
