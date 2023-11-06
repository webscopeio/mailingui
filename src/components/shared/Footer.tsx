import * as React from "react";
import Link from "next/link";
import { email, safeParse, string } from "valibot";
import { ExternalLinkIcon, MailIcon } from "lucide-react";
import { WebscopeLogo } from "@components/WebscopeLogo";
import { CTA } from "@components/ui/CTA";

/** ID of our form in ConvertKit. */
const FORM_ID = "5117081";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterForm, setNewsletterForm] = React.useState({
    email: "",
    isValid: true,
  });

  return (
    <div className="bg-stone-900">
      <footer className="mx-auto flex max-w-[90rem] flex-col justify-between gap-y-8 px-6 pb-24 pt-12 md:flex-row">
        <div className="w-fit space-y-3">
          <div className="space-y-1.5">
            <Link href="https://webscope.io" className="hover:opacity-75">
              <WebscopeLogo />
            </Link>
            <p className="text-sm">
              &copy; {currentYear} MailingUI by Webscope.io. All rights
              reserved.
            </p>
          </div>
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:h-2 before:translate-y-6 before:-skew-y-1 before:bg-indigo-700 before:opacity-50 before:transition-transform hover:before:translate-y-7 hover:before:opacity-40">
            <span className="relative">
              <Link
                className="flex items-center gap-x-2 text-lg font-medium"
                href="https://webscope.io"
              >
                I need development
                <ExternalLinkIcon className="h-4 w-4" />
              </Link>
            </span>
          </span>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-x-2 text-gray-400">
            <MailIcon className="h-5 w-5" />
            <Link
              className="font-semibold underline"
              href="mailto:hello@mailingui.com"
            >
              hello@mailingui.com
            </Link>
          </p>
          <p className="text-sm text-gray-400">Join our Newsletter</p>
          <form
            onSubmit={(e) => {
              const res = safeParse(string([email()]), newsletterForm.email);
              if (!res.success) {
                e.preventDefault();
                setNewsletterForm({ ...newsletterForm, isValid: false });
              }
            }}
            className="space-y-3"
            action={`https://app.convertkit.com/forms/${FORM_ID}/subscriptions`}
            method="post"
          >
            <div className="flex flex-col gap-x-2 gap-y-3 sm:flex-row">
              <input
                className="h-12 w-full rounded-xl border border-gray-400 bg-stone-900 p-4 text-sm md:w-72"
                type="text"
                name="email_address"
                placeholder="Your email"
                aria-label="email"
                value={newsletterForm.email}
                onChange={(e) => {
                  setNewsletterForm({ email: e.target.value, isValid: true });
                }}
              />
              <CTA
                compact
                className="sm:w-fit"
                disabled={!newsletterForm.isValid}
              >
                Subscribe
              </CTA>
            </div>
            <p
              className={`text-sm font-medium text-pink-600 ${
                !newsletterForm.isValid ? "visible" : "invisible"
              }`}
            >
              Please provide a valid email address.
            </p>
          </form>
        </div>
      </footer>
    </div>
  );
};
