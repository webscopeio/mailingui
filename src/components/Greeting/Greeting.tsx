import Image from "next/image";
import { CTA } from "@components/CTA";
import { HtmlIcon, MjmlIcon, ReactIcon } from "@components/Icons";
import homepageHeroImage from "public/static/images/homepage-hero.png";

const emailCodeTypes = [
  {
    name: "React coming soon",
    Icon: ReactIcon,
  },
  {
    name: "MJML",
    Icon: MjmlIcon,
  },
  {
    name: "HTML",
    Icon: HtmlIcon,
  },
];

export const Greeting = () => (
  <section className="max-w-6xl md:mx-auto md:flex md:items-center">
    <div className="px-4 md:flex-1">
      <div className="space-x-2 md:space-x-3">
        {emailCodeTypes.map(({ name, Icon }) => (
          <div
            key={name}
            className="group inline-flex rounded-full p-px first:bg-pink-to-purple-gradient"
          >
            <div className="inline-flex h-full w-full items-center justify-center gap-x-1.5 rounded-full bg-pink-background py-1 px-2 text-pink-text md:py-2 md:px-4">
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
              <span className="bg-clip-text text-xs font-medium group-first:bg-pink-to-purple-gradient group-first:bg-clip-text group-first:text-transparent md:text-sm">
                {name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h1 className="mt-3 text-4xl font-semibold md:mt-5 md:text-6xl">
        Create emails powered by open-source
      </h1>
      <p className="mt-4 text-lg text-neutral-500 md:mt-6 md:text-xl">
        Build emails effortlessly with our stunning open-sourced components and
        templates
      </p>
      <div className="mt-6 space-y-3 md:mt-12 md:inline-flex md:gap-x-3 md:space-y-0">
        <CTA href="/components" color="white" className="w-full md:w-auto">
          Explore components
        </CTA>
      </div>
    </div>
    <div className="relative mt-8 overflow-hidden px-4 md:flex-1">
      <Image
        src={homepageHeroImage}
        alt="Homepage hero image"
        quality={100}
        className="min-w-[390px] md:min-w-[500px]"
        priority={true}
      />
      <div className="absolute bottom-0 h-1/3 w-full bg-[linear-gradient(to_bottom,transparent,#000000_80%)]" />
    </div>
  </section>
);
