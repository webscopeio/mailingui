import React from "react";
import Link from "next/link";
import { cn } from "@utils/cn";

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

export const CTA = React.forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  CTAProps
>(({ color, className, ...delegated }, ref) => {
  const mergedClassName = cn(
    "inline-flex items-center justify-center rounded-xl py-4 px-6 font-medium hover:opacity-70",
    COLORS[color],
    className
  );

  if (delegated.href !== undefined) {
    return <Link {...delegated} className={mergedClassName} ref={ref} />;
  }

  return <button {...delegated} className={mergedClassName} ref={ref} />;
});

CTA.displayName = "CTA";
