import Image from "next/image";
import Link from "next/link";
import PrimaryLink from "../primaryLink/PrimaryLink";
import { emailCodeTypes } from "@/utils/constants";

export default function Greetings() {
  return (
    <section className="flex items-center justify-center gap-4 pt-3 max-lg:flex-col">
      <div className="flex max-w-[40%] flex-col justify-center max-lg:max-w-[90%]">
        <div className="flex gap-3 text-neutral-500 max-sm:justify-center">
          {emailCodeTypes.map(({ name, icon }) => (
            <div
              key={name}
              className="flex gap-2 rounded-3xl bg-dark-900 py-2 px-4"
            >
              <Image src={icon} alt={name} />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
        <h1 className="mt-4 max-w-xl text-[64px] font-semibold leading-[72px] max-xl:text-[42px] max-xl:leading-[52px] max-sm:text-center">
          Easy to build an email with React & MJML
        </h1>
        <p className="mt-4 max-w-xl text-xl text-neutral-500 max-sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <div className="mt-8 flex items-center gap-8 max-sm:justify-center">
          <PrimaryLink href="/build" className="md:px-6">
            Build an email
          </PrimaryLink>
          <Link
            href="/components"
            className="text-base font-medium hover:opacity-70"
          >
            Explore components
          </Link>
        </div>
      </div>
      <div className="h-[660px] w-[30vw] min-w-[420px] rounded-t-[40px] bg-gradient-to-b from-dark-800 via-dark-950 to-black p-6 max-lg:mt-8 max-lg:w-[60vw] max-sm:w-[90%] max-sm:min-w-[0] max-sm:p-5">
        <div className="flex h-[210px] w-[115%] items-center justify-center rounded-2xl bg-customizable-hero bg-cover  max-sm:w-auto">
          <h2 className="align-middle text-2xl max-sm:text-lg">
            Customizable hero image
          </h2>
        </div>
        <div className="mt-6 flex w-[130%] items-start gap-4 max-sm:w-auto max-sm:flex-col">
          <div className="flex w-[383px] flex-col rounded-2xl bg-dark-800 p-6 max-2xl:w-[225px] max-2xl:p-4 max-sm:w-full">
            <h3 className="text-sm font-semibold">
              This is listing components
            </h3>
            <hr className="mt-2 w-11/12 rounded-md border-b-[12px] border-dark-600" />
            <hr className="mt-2 w-8/12 rounded-md border-b-[12px] border-dark-600" />
            <h3 className="mt-7 text-sm font-semibold">
              This is listing components
            </h3>
            <hr className="mt-2 w-11/12 rounded-md border-b-[12px] border-dark-600" />
            <hr className="mt-2 w-8/12 rounded-md border-b-[12px] border-dark-600" />
          </div>
          <div className="flex h-[323px] w-[271px] min-w-[250px] flex-col rounded-2xl bg-gradient-to-b from-dark-800 via-dark-800 to-[#0a0a0a] p-6 max-2xl:p-4 max-sm:h-[200px] max-sm:w-full">
            <div className="flex justify-between">
              <span className="rounded-2xl bg-pink-background py-1.5 px-3 text-sm text-pink-text">
                Badges
              </span>
              <span className="rounded-2xl bg-pink-background py-1.5 px-3 text-sm text-pink-text">
                Full customizable
              </span>
            </div>
            <h2 className="mt-5 text-xl font-semibold">
              Excepteur sint occaec cupidatat non
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
