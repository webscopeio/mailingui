import Image from "next/image";
import Link from "next/link";
import { navigationLinks, socialLinks } from "@constants";
import Logo from "public/static/images/logo.png";
import { NewsletterForm } from "@components/NewsletterForm";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-solid border-dark-700 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-4 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="hover:opacity-70">
            <Image src={Logo} alt="Mailing UI" />
          </Link>
          <div className="mt-4 text-dark-200">
            &copy; {currentYear} MailingUI. All rights reserved.
          </div>
        </div>
        <div className="mt-8 w-full max-w-sm space-y-4 lg:mt-0 lg:justify-self-end">
          <h4 className="text-xs font-semibold uppercase text-dark-200 lg:text-sm">
            Navigation
          </h4>
          <ul className="mt-8 flex flex-col gap-y-4 lg:mt-0">
            {navigationLinks.map(({ href, label }, index) => (
              <li key={index}>
                <Link className="font-medium hover:opacity-70" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 w-full max-w-sm space-y-4 lg:mt-0 lg:justify-self-end">
          <h4 className="text-xs font-semibold uppercase text-dark-200 lg:text-sm">
            Newsletter
          </h4>
          <NewsletterForm compact />
        </div>
      </div>
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 px-4">
        <ul className="flex gap-4 lg:justify-self-end">
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
    </footer>
  );
};
