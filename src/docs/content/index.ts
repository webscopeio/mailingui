import dynamic from "next/dynamic";
import { MDXProps } from "mdx/types";
import { ComponentType } from "react";

export const mdxDocs: Record<string, ComponentType<MDXProps>> = {
  overview: dynamic(() => import(`src/docs/content/Overview.mdx`)),
  "getting-started": dynamic(
    () => import(`src/docs/content/GettingStarted.mdx`)
  ),
  installation: dynamic(() => import(`src/docs/content/Installation.mdx`)),
  theming: dynamic(() => import(`src/docs/content/Theming.mdx`)),
};
