import fs from "fs";
import { NextResponse } from "next/server";

const getFileProps = (path: string) => ({
  path,
  file: fs.readFileSync(path, "utf8"),
});

type SupportedComponents =
  | "badge"
  | "button"
  | "divider"
  | "emoji"
  | "heroSection"
  | "list"
  | "bulletList"
  | "socialIcon"
  | "text";

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
    divider: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/divider/Divider.tsx"),
    },
    emoji: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/emoji/Emoji.tsx"),
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
    bulletList: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/list/BulletList.tsx"),
    },
    socialIcon: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/social-icon/SocialIcon.tsx"),
    },
    text: {
      dependencies: [],
      ...getFileProps("./src/mailingui/components/text/Text.tsx"),
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
