import Image from "next/image";
import TemplateImg1 from "public/static/images/templates-preview/template_preview_1.png";
import TemplateImg2 from "public/static/images/templates-preview/template_preview_2.png";
import TemplateImg3 from "public/static/images/templates-preview/template_preview_3.png";
import TemplateImg4 from "public/static/images/templates-preview/template_preview_4.png";
import TemplateImg5 from "public/static/images/templates-preview/template_preview_5.png";
import TemplateImg6 from "public/static/images/templates-preview/template_preview_6.png";
import TemplateImg7 from "public/static/images/templates-preview/template_preview_7.png";

export default function TemplatesPreview() {
  const templateImages = [
    TemplateImg1,
    TemplateImg2,
    TemplateImg3,
    TemplateImg4,
    TemplateImg5,
    TemplateImg6,
    TemplateImg7,
  ];

  const dynamicStyles: { [index: number]: string } = {
    0: "-mb-20",
    1: "-mb-40",
    3: "-mb-20",
    4: "-mb-40",
    6: "col-start-3",
  };

  return (
    <div className="relative mx-6 grid max-w-[1344px] grid-cols-3 place-items-center gap-12 p-6 max-2xl:gap-6 max-md:gap-4">
      {templateImages.map((image, index) => (
        <div key={index} className={dynamicStyles[index]}>
          <Image src={image} alt="template preview" quality={100} />
        </div>
      ))}
      <div className="absolute inset-0 z-50	bg-gradient-to-b from-transparent via-[#000000d0] to-black p-6"></div>
    </div>
  );
}
