"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkStyles = (path: string) => {
    return `text-xl font-bold self-start hover:text-violet-300 ${
      pathname === path || (path !== "/" && pathname?.includes(path))
        ? "text-violet-300"
        : ""
    }`;
  };

  return (
    <div className="flex justify-between mt-2 px-5 h-20 w-100">
      <Link href="/" className={linkStyles("/")}>
        MailingUI
      </Link>
      <Link href="/templates" className={linkStyles("/templates")}>
        Templates
      </Link>
    </div>
  );
}
