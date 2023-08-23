import Link from "next/link";
import { MailingUILogo } from "../MailingUILogo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-stone-900">
      <footer className="mx-auto max-w-[90rem] px-6 pb-24 pt-12">
        <div>
          <Link href="/" className="hover:opacity-75">
            <MailingUILogo />
          </Link>
          <div className="mt-4">
            &copy; {currentYear} MailingUI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
