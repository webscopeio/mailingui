"use client";

import * as React from "react";
import { MDXProvider } from "@mdx-js/react";

import { type MDXComponents } from "mdx/types";

import { getMDXComponents } from "../../utils";

import { type Theme } from "@mailingui/themes";

export const Markdown: React.FC<
  React.PropsWithChildren<{
    components?: MDXComponents;
    theme?: Theme;
    baseUrl?: string;
  }>
> = ({ components, theme = {}, baseUrl, children }) => {
  return (
    <MDXProvider components={getMDXComponents({ components, theme, baseUrl })}>
      {children}
    </MDXProvider>
  );
};
