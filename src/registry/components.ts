import { type StaticImageData } from "next/image";

import Badges from "public/images/components-preview/badges.png";
import Buttons from "public/images/components-preview/buttons.png";
import Markdown from "public/images/components-preview/markdown.png";
import Typography from "public/images/components-preview/typography.png";

type ComponentMetadataType = {
  type: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
}

export const componentTypes: ComponentMetadataType[] = [
  {
    type: "badges",
    title: "Badges",
    subtitle: "Highlight key information with attention-grabbing badges",
    image: Badges,
  },
  {
    type: "buttons",
    title: "Buttons",
    subtitle: "Drive user action with clickable buttons",
    image: Buttons,
  },
  {
    type: "markdown",
    title: "Markdown",
    subtitle: "Use the power of MDX to author your emails",
    image: Markdown,
  },
  {
    type: "typography",
    title: "Typography",
    subtitle: "Beautiful typographic defaults for HTML you do control",
    image: Typography,
  },
];
