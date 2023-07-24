import { type StaticImageData } from "next/image";

import { MDXProps } from "mdx/types";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import SocialIcons from "public/static/images/components-preview/social_icons.png";
import Paragraphs from "public/static/images/components-preview/paragraphs.png";
import Lists from "public/static/images/components-preview/listing.png";
import Heroes from "public/static/images/components-preview/heroes.png";
import Emojis from "public/static/images/components-preview/emojis.png";
import Dividers from "public/static/images/components-preview/dividers.png";
import Buttons from "public/static/images/components-preview/buttons.png";
import Badges from "public/static/images/components-preview/badges.png";

interface ComponentMetadataType {
  type: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
  dependencies?: string[];
}

export const mdxDocs: Record<string, ComponentType<MDXProps>> = {
  badges: dynamic(() => import(`src/docs/content/components/badges.mdx`)),
  lists: dynamic(() => import(`src/docs/content/components/lists.mdx`)),
  buttons: dynamic(() => import(`src/docs/content/components/buttons.mdx`)),
  dividers: dynamic(() => import(`src/docs/content/components/dividers.mdx`)),
  emojis: dynamic(() => import(`src/docs/content/components/emojis.mdx`)),
  "hero-sections": dynamic(
    () => import(`src/docs/content/components/hero-sections.mdx`)
  ),
  "social-icons": dynamic(
    () => import(`src/docs/content/components/social-icons.mdx`)
  ),
  texts: dynamic(() => import(`src/docs/content/components/texts.mdx`)),
};

export const componentTypes: ComponentMetadataType[] = [
  {
    type: "hero-sections",
    title: "Hero section",
    subtitle: "Beautiful headers to showcase your message",
    image: Heroes,
  },
  {
    type: "lists",
    title: "Lists",
    subtitle: "Organize information with simple lists",
    image: Lists,
  },
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
    type: "emojis",
    title: "Emojis",
    subtitle: "Add personality and emotion to your messages",
    image: Emojis,
  },
  {
    type: "social-icons",
    title: "Social icons",
    subtitle: "Increase engagement with clickable social icons",
    image: SocialIcons,
  },
  {
    type: "texts",
    title: "Paragraphs",
    subtitle: "Craft compelling content with easy-to-read paragraphs",
    image: Paragraphs,
  },
  {
    type: "dividers",
    title: "Dividers",
    subtitle: "Create visual separation for a clean, professional look",
    image: Dividers,
  },
];
