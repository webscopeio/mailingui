import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithoutRef } from "react";
import { ProsePre } from "@components/InstallationDocs";
import { cn } from "@utils/cn";

const HeadingAnchor = (props: ComponentPropsWithoutRef<"a">) => {
  const { children, ...otherProps } = props;
  return (
    <a className="no-underline" {...otherProps}>
      {children}
    </a>
  );
};

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
    h1: (props) => {
      const { children, id, className, ...otherProps } = props;
      return (
        <h1
          id={id}
          className={cn(
            "text-3xl font-semibold md:text-5xl scroll-m-20 tracking-tight lg:text-5xl after:ml-4 after:opacity-80 hover:after:content-['#']",
            className
          )}
          {...otherProps}
        >
          {id ? (
            <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
          ) : (
            children
          )}
        </h1>
      );
    },
    h2: (props) => {
      const { children, id, className, ...otherProps } = props;
      return (
        <h2
          id={id}
          className={cn(
            "text-2xl font-semibold md:text-4xl scroll-m-20 tracking-tight after:ml-3 after:opacity-80 hover:after:content-['#']",
            className
          )}
          {...otherProps}
        >
          {id ? (
            <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
          ) : (
            children
          )}
        </h2>
      );
    },
    p: ({ children }) => (
      <p className="text-lg text-neutral-500 md:text-xl">{children}</p>
    ),
    h3: (props) => {
      const { children, id, className, ...otherProps } = props;
      return (
        <h3
          id={id}
          className={cn(
            "text-xl font-semibold md:text-2xl scroll-m-20 tracking-tight after:ml-2 after:opacity-80 hover:after:content-['#']",
            className
          )}
          {...otherProps}
        >
          {id ? (
            <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
          ) : (
            children
          )}
        </h3>
      );
    },
    pre: ({ children }) => <ProsePre>{children}</ProsePre>,
    a: ({ children, ...props }) => (
      <a
        className="underline decoration-neutral-500/40 underline-offset-4 hover:opacity-80"
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
