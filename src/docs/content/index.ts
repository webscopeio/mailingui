import dynamic from "next/dynamic";
import { MDXProps } from "mdx/types";
import { ComponentType } from "react";

export const mdxDocs: Record<string, ComponentType<MDXProps>> = {
  introduction: dynamic(() => import(`src/docs/content/Introduction.mdx`)),
  components: dynamic(() => import(`src/docs/content/Components.mdx`)),
};
