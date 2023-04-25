import Image from "next/image";
import { CTA } from "@components/CTA";
import feedbackImage from "public/static/images/feedback/feedback.png";

export default function FeedbackPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 place-items-center gap-4 px-4 pt-8 md:grid-cols-2 md:pt-16">
      <section>
        <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
          Be part of the <br /> MailingUI community
        </h1>
        <p className="mt-4 text-lg text-neutral-500 md:mt-6 md:text-xl">
          You found a issue or have a suggestion for a new feature, let us know
          and become part of MailingUI.
        </p>
        <div className="mt-8 w-full md:flex md:gap-4">
          <CTA
            href={"https://github.com/webscopeio/mailingui-web/issues"}
            color="white"
            className="w-full md:w-auto"
          >
            Report an issue
          </CTA>
          <CTA
            href={"https://github.com/webscopeio/mailingui-web/discussions"}
            color="black"
            className="w-full md:w-auto"
          >
            Request a new feature
          </CTA>
        </div>
      </section>
      <Image
        src={feedbackImage}
        alt="Feedback Image"
        quality={100}
        className="md:max-w-[500px]"
        priority={true}
      />
    </div>
  );
}
