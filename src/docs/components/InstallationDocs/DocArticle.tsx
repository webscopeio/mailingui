import { cn } from "@utils/cn";

export const DocArticle = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <article
    {...props}
    className={cn(
      props.className,
      "mx-auto my-8 max-w-none space-y-8 md:space-y-12"
    )}
  />
);
