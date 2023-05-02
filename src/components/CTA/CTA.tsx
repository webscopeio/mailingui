import Link from "next/link";
import { clsx } from "@utils";

const COLORS = {
  white: "bg-white text-black",
  black: "bg-black text-white",
} as const;

type AsLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

interface AsButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  href?: never;
}

type CTAProps = (AsLinkProps | AsButtonProps) & {
  /** Color of the button. */
  color: keyof typeof COLORS;
};

export const CTA: React.FC<CTAProps> = ({ color, className, ...delegated }) => {
  const mergedClassName = clsx(
    "inline-flex items-center justify-center rounded-xl py-4 px-6 font-medium hover:opacity-70",
    COLORS[color],
    className
  );

  if (delegated.href !== undefined) {
    return <Link {...delegated} className={mergedClassName} />;
  }

  return <button {...delegated} className={mergedClassName} />;
};
