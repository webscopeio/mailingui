import dynamic from "next/dynamic";
import { MDXProps } from "mdx/types";
import { ComponentType } from "react";

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
