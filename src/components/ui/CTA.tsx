import Link from "next/link";
import { cn } from "@utils/cn";

type CTAProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  secondary?: boolean;
  compact?: boolean;
  dynamicWidth?: boolean;
  className?: string;
};

type CTASlot = React.PropsWithChildren<{ className: string }>;

export const CTA = ({
  children,
  href,
  onClick,
  secondary,
  compact,
  dynamicWidth = true,
  className,
}: CTAProps) => {
  const Component = href
    ? (props: CTASlot) => <Link href={href} {...props} />
    : (props: CTASlot) => <button onClick={onClick} {...props} />;
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center gap-x-2 rounded-xl font-medium text-center",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:!ring-white focus-visible:ring-offset-2 focus-visible:!ring-offset-[#111111]"
        ,
        !secondary && "bg-white text-black",
        !secondary
          ? "hover-brand-gradient hover:text-white transition-colors"
          : "border border-transparent hover:border-white",
        compact ? "px-6 h-12 text-sm" : "px-8 h-14",
        dynamicWidth ? "w-full lg:w-fit" : "w-fit",
        className,
      )}
    >
      {children}
    </Component>
  );
};
