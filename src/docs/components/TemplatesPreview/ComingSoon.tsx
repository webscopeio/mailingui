import Image from "next/image";
import templatesPreview from "public/static/images/templates-preview.png";

export const TemplatesComingSoon = () => {
  return (
    <div className="relative -mx-4 overflow-hidden">
      <Image
        src={templatesPreview}
        alt="Screenshot of various templates"
        quality={100}
        className="relative left-1/2 w-full min-w-[540px] -translate-x-1/2 px-4"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.65)_50.1%,#000000_100%)] p-8">
        <div className="bg-pink-to-purple-gradient bg-clip-text text-3xl font-bold uppercase text-transparent drop-shadow-lg sm:text-6xl">
          More coming soon
        </div>
      </div>
    </div>
  );
};
