import Image from "next/image";
import Link from "next/link";
import { navigationLinks, socialLinks } from "@constants";
import Logo from "public/static/images/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-solid border-dark-700">
      <div className="mx-auto max-w-6xl py-16 px-4">
        <div className="md:flex md:items-center md:justify-between">
          <Link href="/" className="hover:opacity-70">
            <Image src={Logo} alt="Mailing UI" />
          </Link>

          <div className="mt-4 text-dark-200 md:hidden">
            &copy; {currentYear} MailingUI. All rights reserved.
          </div>

          <ul className="mt-8 flex flex-col gap-y-4 md:mt-0 md:flex-row md:gap-x-8">
            {navigationLinks.map(({ href, label }, index) => (
              <li key={index}>
                <Link className="font-medium hover:opacity-70" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex gap-4 md:mt-0">
            {socialLinks.map(({ href, label, Icon }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className="hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{label}</span>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 hidden text-dark-200 md:block">
          &copy; {currentYear} MailingUI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
