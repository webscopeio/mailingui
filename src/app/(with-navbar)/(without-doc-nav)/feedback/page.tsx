import Image from "next/image";
import type { Metadata } from "next";
import { CTA } from "@components/CTA";
import feedbackImage from "public/static/images/feedback/feedback.png";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
} from "src/docs/constants";

export const metadata: Metadata = {
  title: "Feedback",
  description:
    "Whether it's an issue you've encountered or a new feature suggestion, your feedback is important to us.",
  openGraph: {
    ...sharedOpenGraphMetadata,
    title: "Feedback",
    description:
      "Whether it's an issue you've encountered or a new feature suggestion, your feedback is important to us.",
    url: "https://mailingui.com/feedback",
    images: [
      {
        ...openGraphImageSize,
        url: "/static/images/og/feedback.png",
      },
    ],
  },
};

export default function FeedbackPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 place-items-center gap-4 px-4 pt-8 md:grid-cols-2 md:pt-16">
      <section>
        <h1 className="mt-2 text-3xl font-semibold md:text-5xl">
          Share your Feedback
        </h1>
        <p className="mt-4 text-lg text-neutral-500 md:mt-6 md:text-xl">
          We want to hear what you think about MailingUI! Whether it&apos;s an
          issue you&apos;ve encountered or a new feature suggestion, your
          feedback is important to us.
        </p>
        <div className="mt-8 w-full md:flex md:gap-4">
          <CTA
            href={"https://github.com/webscopeio/mailingui/issues"}
            color="white"
            className="w-full md:w-auto"
          >
            Report an issue
          </CTA>
          <CTA
            href={"https://github.com/webscopeio/mailingui/discussions"}
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
