import * as React from "react";
import Image from "next/image";
import { email, safeParse, string } from "valibot";
import newsletterImage from "public/images/newsletter/newsletter.png";
import { CTA } from "@components/ui/CTA";

/** ID of our form in ConvertKit. */
const FORM_ID = "5117081";

export const Homepage = () => {
  const [newsletterForm, setNewsletterForm] = React.useState({
    email: "",
    isValid: true,
  });

  return (
    <div className="mx-auto grid h-full w-full max-w-5xl place-content-center place-items-center gap-6 lg:grid-cols-2">
      <Image
        src={newsletterImage}
        alt="Feedback Image"
        quality={100}
        className="max-w-[400px] lg:max-w-[500px]"
        priority={true}
      />
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl">
          Subscribe for Updates
        </h1>
        <p className="text-lg leading-relaxed text-gray-400">
          Stay informed about the latest developments and updates from
          MailingUI.
        </p>
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
              className="h-12 w-full rounded-xl border border-gray-400 bg-stone-900 p-4 text-sm lg:w-72"
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
      </section>
    </div>
  );
};
