import Image from "next/image";
import { CTA } from "@components/CTA";
import minimalHeroImage from "public/static/images/minimal-hero.png";

const GradientBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex rounded-full bg-pink-to-purple-gradient p-px">
      <div className="inline-flex h-full w-full rounded-full bg-pink-background px-2 py-1 text-pink-text md:px-4 md:py-2">
        <span className="bg-pink-to-purple-gradient bg-clip-text text-sm font-medium text-transparent md:text-sm">
          {children}
        </span>
      </div>
    </div>
  );
};

export const TemplatesMinimalAvailable = () => {
  return (
    <div className="flex-row-reverse gap-4 md:flex md:items-center md:gap-12 lg:gap-24">
      <div className="flex flex-col gap-3 md:flex-1 md:gap-4">
        <div className="flex gap-2 md:gap-4">
          <GradientBadge>New</GradientBadge>
          <GradientBadge>Free template</GradientBadge>
        </div>

        <h2 className="text-2xl font-semibold md:text-4xl">
          Minimal style templates available
        </h2>
        <p className="mt-1 text-lg text-neutral-500 md:mt-2 md:text-lg">
          Craft emails effortlessly using a beautifully curated collection of
          free templates
        </p>
        <div className="mt-2 md:mt-4 md:inline-flex">
          {/* ! Href to /docs/templates which has redirect rule leads to /docs/templates/minimal 404 error, cause unknown */}
          <CTA
            href="/docs/templates/minimal"
            color="white"
            className="w-full md:w-auto"
          >
            Explore Minimal templates
          </CTA>
        </div>
      </div>
      <div className="relative mt-8 overflow-hidden md:flex-1">
        <Image
          src={minimalHeroImage}
          alt="Homepage hero image"
          quality={100}
          className="w-full"
          priority={true}
        />
        <div className="absolute bottom-0 h-1/3 w-full bg-[linear-gradient(to_bottom,transparent,#000000_100%)]" />
      </div>
    </div>
  );
};
