import { cn } from "@utils/cn";

export const DocArticle = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <article
    {...props}
    className={cn(
      props.className,
      "prose prose-invert mx-auto my-8 max-w-none lg:prose-lg prose-headings:font-medium prose-p:font-light prose-p:text-neutral-300"
    )}
  />
);
