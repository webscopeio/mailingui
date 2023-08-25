import Image from "next/image";
import { CTA } from "@components/ui/CTA";
import notFoundImage from "public/images/not-found.png";

export const NotFound = () => {
  return (
    <div className="mx-auto grid h-full w-full max-w-5xl place-content-center place-items-center gap-6">
      <Image
        src={notFoundImage}
        alt="Not Found"
        className="lg:max-w-[500px]"
        quality={100}
        priority={true}
      />
      <CTA href="/">Go back home</CTA>
    </div>
  );
};
