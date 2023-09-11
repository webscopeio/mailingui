import fs from "fs";
import { NextResponse } from "next/server";

const getFileProps = (path: string) => ({
  path,
  file: fs.readFileSync(path, "utf8"),
});

type SupportedComponents = "badge" | "button" | "typography" | "markdown";

const getComponents = (): Record<
  SupportedComponents,
  {
    dependencies: SupportedComponents[];
    exports: string[];
    path: string;
  }
> => {
  return {
    badge: {
      dependencies: [],
      exports: ["Badge"],
      ...getFileProps("./src/mailingui/components/badge/Badge.tsx"),
    },
    button: {
      dependencies: [],
      exports: ["Button"],
      ...getFileProps("./src/mailingui/components/button/Button.tsx"),
    },
    typography: {
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
      ...getFileProps("./src/mailingui/components/typography/Typography.tsx"),
    },
    markdown: {
      dependencies: ["badge", "button", "typography"],
      exports: ["Markdown", "getMDXComponents"],
      ...getFileProps("./src/mailingui/components/markdown/Markdown.tsx"),
    },
  };
};

export async function GET() {
  const components = getComponents();
  return NextResponse.json({ components });
}
