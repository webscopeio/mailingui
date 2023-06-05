import Image from "next/image";
import Link from "next/link";
import { emailComponents } from "@constants";
import { cn } from "@utils/cn";

export type ComponentsPreviewProps = {
  componentsShown?: number;
  componentsShownOnMobile?: number;
  preloadImages?: boolean;
};

export const ComponentsPreview = ({
  componentsShown,
  componentsShownOnMobile,
  preloadImages,
}: ComponentsPreviewProps) => (
  <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
    {emailComponents
      .slice(0, componentsShown)
      .map(({ image, title, subtitle, type }, index) => (
        <li
          className={cn(
            "group relative rounded-2xl hover:opacity-90",
            typeof componentsShownOnMobile === "number" &&
              componentsShownOnMobile > 0 &&
              index >= componentsShownOnMobile &&
              "hidden sm:list-item"
          )}
          key={title}
        >
          <Image
            src={image}
            alt={title}
            quality={100}
            className="relative w-full"
            priority={preloadImages}
          />
          <h3 className="mt-4 text-base font-medium text-white">
            <Link href={`/components/${type}`} className="hover:opacity-70">
              <span className="absolute -inset-2.5 z-10 cursor-pointer" />
              <span>{title}</span>
            </Link>
          </h3>
          <p className="mt-1 text-sm text-dark-100">{subtitle}</p>
        </li>
      ))}
  </ul>
);
