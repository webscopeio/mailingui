import fs from "fs";

const getFileProps = (path: string) => ({
  path,
  file: fs.readFileSync(path, "utf8"),
});

type SupportedComponents =
  | "emoji"
  | "badge"
  | "divider"
  | "heroSection"
  | "list";

const getComponents = (): Record<
  SupportedComponents,
  {
    dependencies: SupportedComponents[];
    path: string;
  }
> => {
  return {
    emoji: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/emoji/Emoji.tsx"),
    },
    badge: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/badge/Badge.tsx"),
    },
    divider: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/divider/Divider.tsx"),
    },
    heroSection: {
      dependencies: [],
      ...getFileProps(
        "./src/mailingui/components/hero-section/HeroSection.tsx"
      ),
    },
    list: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/list/List.tsx"),
    },
  };
};

export const GET = async (req: Request, res: Response) => {
  try {
    return NextResponse.json({ components: getComponents() });
  } catch (error) {
    return NextResponse.error();
  }
};

import { NextResponse } from "next/server";
