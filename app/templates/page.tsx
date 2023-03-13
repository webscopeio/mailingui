import Image from "next/image";
import { emailTemplates } from "@/utils/constants";
import Link from "next/link";

export default function Templates() {
  return (
    <div className="relative mx-6 mt-40 mb-10 flex flex-col items-center justify-center max-2xl:px-28 max-xl:mt-28 max-xl:px-2">
      <div className="grid max-w-[1344px] grid-cols-3 gap-x-10 gap-y-16 max-xl:gap-y-8 max-xl:gap-x-6">
        <h2 className="absolute top-[-104px] self-start text-4xl font-bold max-xl:top-[-74px] max-xl:text-2xl">
          Templates
        </h2>
        {emailTemplates.map(({ image, title, type }) => (
          <Link
            key={type}
            href={`/templates/${type}/reset-password`}
            className="flex max-w-[416px] flex-col hover:opacity-70"
          >
            <Image src={image} alt="template" />
            <h3 className="mt-5 text-3xl max-xl:mt-3 max-xl:text-xl">
              {title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
