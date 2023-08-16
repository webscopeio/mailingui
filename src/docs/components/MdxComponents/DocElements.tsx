import { ComponentPropsWithoutRef } from "react";
import { cn } from "@utils/cn";

const HeadingAnchor = (props: ComponentPropsWithoutRef<"a">) => {
  const { children, ...otherProps } = props;
  return (
    <a className="no-underline" {...otherProps}>
      {children}
    </a>
  );
};

export const MdxH1 = (props: React.ComponentPropsWithoutRef<"h1">) => {
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
};

export const MdxH2 = (props: React.ComponentPropsWithoutRef<"h2">) => {
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
};

export const MdxH3 = (props: React.ComponentPropsWithoutRef<"h3">) => {
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
};

export const MdxP = ({ children }: React.ComponentPropsWithoutRef<"p">) => (
  <p className="text-lg text-neutral-500 md:text-xl">{children}</p>
);

export const MdxA = ({
  children,
  ...otherProps
}: React.ComponentPropsWithoutRef<"a">) => (
  <a
    className="underline decoration-neutral-500/40 underline-offset-4 hover:opacity-80"
    {...otherProps}
  >
    {children}
  </a>
);

export const MdxCode = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"code">) => (
  <code className="text-neutral-300" {...props}>
    {children}
  </code>
);

export const MdxOl = ({ children }: React.ComponentPropsWithoutRef<"ol">) => (
  <ol className="list-inside list-decimal pl-2 text-lg text-neutral-500 md:text-xl">
    {children}
  </ol>
);

export const MdxUl = ({ children }: React.ComponentPropsWithoutRef<"ul">) => (
  <ul className="list-inside list-disc pl-2 text-lg text-neutral-500 md:text-xl">
    {children}
  </ul>
);
export const MdxH4 = (props: React.ComponentPropsWithoutRef<"h4">) => {
  const { children, id, className, ...otherProps } = props;
  return (
    <h4
      id={id}
      className={cn(
        "text-lg font-semibold md:text-xl scroll-m-4 tracking-tight after:ml-1.5 after:opacity-80 hover:after:content-['#']",
        className
      )}
      {...otherProps}
    >
      {id ? (
        <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
      ) : (
        children
      )}
    </h4>
  );
};
