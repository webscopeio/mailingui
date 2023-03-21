import Image from "next/image";
import { emailTemplates } from "@/utils/constants";
import TemplatePlug from "public/static/images/template_plug.png";

export default function TemplatesPreview() {
  const dynamicStyles: { [index: number]: string } = {
    0: "-mb-20",
    1: "-mb-40",
    3: "-mb-20",
    4: "-mb-40",
    6: "col-start-3",
  };

  return (
    <div className="relative mx-6 grid max-w-[1344px] grid-cols-3 place-items-center gap-12 p-6 max-2xl:gap-6 max-md:gap-4">
      {emailTemplates.map(({ image }, index) => (
        <div key={index} className={dynamicStyles[index]}>
          <Image src={image} alt="template preview" quality={100} />
        </div>
      ))}
      <div className="col-start-3">
        <Image src={TemplatePlug} alt="template preview" />
      </div>
      <div className="absolute inset-0 z-50	bg-gradient-to-b from-transparent via-[#000000d0] to-black p-6"></div>
    </div>
  );
}
