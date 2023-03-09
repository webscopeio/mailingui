"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "public/static/images/logo.png";
import Instagram from "public/static/icons/instagram.png";
import Github from "public/static/icons/github.png";

export default function Header() {
  const pathname = usePathname();

  const linkStyles = (path: string) => {
    return `text-base font-bold self-start hover:opacity-70 ${
      pathname === path || (path !== "/" && pathname?.includes(path))
        ? "text-pink-text"
        : ""
    }`;
  };

  return (
    <div className="flex w-full items-center justify-evenly border-b border-solid border-dark-700 py-7">
      <Link href="/" className="hover:opacity-70">
        <Image src={Logo} alt="App Logo" width={110} height={30} />
      </Link>

      <ul className="flex items-center justify-between gap-8">
        <li>
          <Link href="/components" className={linkStyles("/components")}>
            Components
          </Link>
        </li>
        <li>
          <Link href="/pricing" className={linkStyles("/pricing")}>
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/documentation" className={linkStyles("/documentation")}>
            Documentation
          </Link>
        </li>
        <li>
          <Link href="/support" className={linkStyles("/support")}>
            Support
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-between gap-4">
        <Link
          href="https://instagram.com"
          target="_blank"
          className="hover:opacity-70"
        >
          <Image src={Instagram} alt="Instagram" width={24} height={24} />
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          className="hover:opacity-70"
        >
          <Image src={Github} alt="Github" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}
