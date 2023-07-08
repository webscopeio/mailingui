import fs from "fs";

const getFileProps = (path: string) => ({
  path,
  file: fs.readFileSync(path, "utf8"),
});

const components: Record<
  "badge" | "divider" | "heroSection" | "list" | "themeProvider",
  {
    dependencies: string[];
    path: string;
  }
> = {
  badge: {
    dependencies: ["themeProvider"],
    ...getFileProps("./src/mailingui/components/badge/Badge.tsx"),
  },
  divider: {
    dependencies: [],
    ...getFileProps("./src/mailingui/components/divider/Divider.tsx"),
  },
  heroSection: {
    dependencies: [],
    ...getFileProps("./src/mailingui/components/hero-section/HeroSection.tsx"),
  },
  list: {
    dependencies: [],
    ...getFileProps("./src/mailingui/components/list/List.tsx"),
  },
  themeProvider: {
    dependencies: [],
    ...getFileProps(
      "./src/mailingui/components/ThemeProvider/ThemeProvider.tsx"
    ),
  },
};

export const GET = async (req: Request, res: Response) => {
  try {
    return NextResponse.json({ components });
  } catch (error) {
    console.error("Error:", error);
    // return NextResponse.error();
  }
};

import { NextResponse } from "next/server";
