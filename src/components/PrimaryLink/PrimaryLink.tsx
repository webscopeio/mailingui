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
    className={`rounded-xl bg-white py-2 px-3 font-medium text-black hover:opacity-70 md:py-4 md:px-14 ${className}`}
  >
    {children}
  </Link>
);
