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
    path: string;
  }
> => {
  return {
    badge: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/badge/Badge.tsx"),
    },
    button: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/button/Button.tsx"),
    },
    typography: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/typography/Typography.tsx"),
    },
    markdown: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/markdown/Markdown.tsx"),
    },
  };
};

export const GET = async () => {
  try {
    return NextResponse.json({ components: getComponents() });
  } catch (error) {
    return NextResponse.error();
  }
};
