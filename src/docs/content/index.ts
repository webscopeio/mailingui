import dynamic from "next/dynamic";
import { MDXProps } from "mdx/types";
import { ComponentType } from "react";

export const mdxDocs: Record<string, ComponentType<MDXProps>> = {
  overview: dynamic(() => import(`src/docs/content/Overview.mdx`)),
  usage: dynamic(() => import(`src/docs/content/Usage.mdx`)),
  installation: dynamic(() => import(`src/docs/content/Installation.mdx`)),
  theming: dynamic(() => import(`src/docs/content/Theming.mdx`)),
};
