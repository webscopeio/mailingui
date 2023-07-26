import dynamic from "next/dynamic";
import { MDXProps } from "mdx/types";
import { ComponentType } from "react";

export const mdxDocs: Record<string, ComponentType<MDXProps>> = {
  installation: dynamic(() => import(`src/docs/content/Installation.mdx`)),
  components: dynamic(() => import(`src/docs/content/Components.mdx`)),
  "components/badges": dynamic(
    () => import(`src/docs/content/components/badges.mdx`)
  ),
  "components/lists": dynamic(
    () => import(`src/docs/content/components/lists.mdx`)
  ),
  "components/buttons": dynamic(
    () => import(`src/docs/content/components/buttons.mdx`)
  ),
  "components/dividers": dynamic(
    () => import(`src/docs/content/components/dividers.mdx`)
  ),
  "components/emojis": dynamic(
    () => import(`src/docs/content/components/emojis.mdx`)
  ),
  "components/hero-sections": dynamic(
    () => import(`src/docs/content/components/hero-sections.mdx`)
  ),
  "components/social-icons": dynamic(
    () => import(`src/docs/content/components/social-icons.mdx`)
  ),
  "components/texts": dynamic(
    () => import(`src/docs/content/components/texts.mdx`)
  ),
};
