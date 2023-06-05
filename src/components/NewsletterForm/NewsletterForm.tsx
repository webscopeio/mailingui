import Image from "next/image";
import { CTA } from "@components/CTA";
import newsletterDove from "public/static/images/newsletter-dove.png";

/** ID of our form in ConvertKit. */
const FORM_ID = "5117081";

/**
 * The values of attributes are based on the official `convert-kit` React package: https://github.com/ConvertKit/convertkit-react.
 * @returns A newsletter subscription form.
 */
export const NewsletterForm: React.FC<{ compact?: boolean }> = ({
  compact = false,
}) => {
  if (compact) {
    return (
      <form
        className="flex flex-row gap-y-2"
        action={`https://app.convertkit.com/forms/${FORM_ID}/subscriptions`}
        method="post"
      >
        <input
          className="w-full rounded-xl rounded-r-none border border-r-0 border-solid border-dark-700 bg-dark-800 px-4 py-3 text-sm font-medium text-white placeholder:text-dark-300"
          type="email"
          name="email_address"
          placeholder="Your email"
          aria-label="email"
        />
        <CTA
          type="submit"
          color="white"
          className="w-auto rounded-l-none px-4 py-3 text-sm"
        >
          Subscribe
        </CTA>
      </form>
    );
  }
  return (
    <div className="mx-auto mt-16 max-w-6xl px-4">
      <Image
        src={newsletterDove}
        alt="Dove with a letter image"
        quality={100}
        priority={true}
        className="mx-auto"
      />
      <h2 className="mt-4 text-center text-xl font-semibold md:text-3xl">
        Enter your email address and stay tuned
      </h2>
      <form
        className="mt-4 flex flex-col gap-y-2 md:flex-row md:justify-center"
        action={`https://app.convertkit.com/forms/${FORM_ID}/subscriptions`}
        method="post"
      >
        <input
          className="w-full rounded-xl border border-solid border-dark-700 bg-dark-800 p-4 text-base font-medium text-white placeholder:text-dark-300 md:w-96 md:rounded-r-none md:border-r-0"
          type="email"
          name="email_address"
          placeholder="Your email"
          aria-label="email"
        />
        <CTA
          type="submit"
          color="white"
          className="w-full p-4 md:w-auto md:rounded-l-none"
        >
          Subscribe
        </CTA>
      </form>
    </div>
  );
};
