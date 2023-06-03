import Link from "next/link";

export type PrimaryLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const PrimaryLink = ({
  href,
  children,
  className,
}: PrimaryLinkProps) => (
  <Link
    href={href}
    className={`rounded-xl bg-white px-3 py-2 font-medium text-black hover:opacity-70 md:px-14 md:py-4 ${className}`}
  >
    {children}
  </Link>
);
