import type { MDXComponents } from "mdx/types";
import { ProsePre } from "@components/InstallationDocs";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => (
    //   <h1 className="text-2xl font-semibold md:text-6xl">{children}</h1>
    // ),
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl font-semibold  md:text-5xl" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className=" text-2xl font-semibold md:text-4xl" {...props}>
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-lg text-neutral-500 md:text-xl">{children}</p>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-xl font-semibold md:text-2xl" {...props}>
        {children}
      </h3>
    ),
    pre: ({ children }) => <ProsePre>{children}</ProsePre>,
    a: ({ children, ...props }) => (
      <a
        className="underline decoration-neutral-500/40 underline-offset-4 after:ml-2 after:inline-block after:opacity-80 hover:after:content-['#']"
        {...props}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="text-neutral-300">{children}</code>
    ),
    ...components,
  };
}
