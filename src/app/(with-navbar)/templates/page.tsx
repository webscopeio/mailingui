import Image from "next/image";
import Link from "next/link";
import { emailTemplates } from "@constants";

export default function Templates() {
  return (
    <div className="mx-auto max-w-[1344px] px-6 pb-10 pt-24">
      <h2 className="text-2xl font-bold xl:text-4xl">Templates</h2>
      <div className="mt-16 grid grid-cols-3 gap-x-6 gap-y-8 xl:gap-x-10 xl:gap-y-16">
        {emailTemplates.map(({ image, title, type }) => (
          <Link
            key={type}
            href={`/templates/${type}/reset-password`}
            className="flex flex-col hover:opacity-70"
          >
            <Image src={image} alt="template" />
            <h3 className="mt-3 text-xl xl:mt-5 xl:text-3xl">{title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
