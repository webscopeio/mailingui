import { cn } from "@utils/cn";

export const ProsePre = (props: React.HTMLAttributes<HTMLPreElement>) => (
  <pre
    {...props}
    className={cn(
      props.className,
      "rounded-xl border border-solid border-dark-700 bg-dark-800 px-4 py-3"
    )}
  />
);
