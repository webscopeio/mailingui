import Image from "next/image";
import notFoundImage from "public/static/images/not-found.png";
import { Navbar } from "@components/Navbar";
import { CTA } from "@components/CTA";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="mx-auto mt-16 grid max-w-md place-items-center gap-4 px-4 md:mt-24">
        <Image
          src={notFoundImage}
          alt="Homepage hero image"
          quality={100}
          priority={true}
        />
        <CTA href="/" color="white" className="w-full md:w-auto">
          Go back home
        </CTA>
      </div>
    </>
  );
}
