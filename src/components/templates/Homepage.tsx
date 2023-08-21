import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import Image from "next/image";
import { Header } from "./Header";
import { templates } from "@registry/templates";
import { CTA } from "@components/ui/CTA";

export const Homepage = () => {
  return (
    <div className="mx-auto space-y-12 pt-2">
      {templates.map((template) => (
        <div key={template.id}>
          <Header
            tag={template.price}
            github={template.github}
            title={template.title}
            description={template.description}
            downloadHref={template.downloadHref}
          />
          <section className="space-y-12 py-10">
            {template.categories.map((category) => (
              <div
                key={category.downloadHref}
                className="grid grid-cols-1 items-center justify-center gap-6"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
                      {category.title}
                    </h3>
                    <p className="line-clamp-2 text-gray-400">
                      {category.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 lg:flex-row">
                    <CTA compact href={category.href}>
                      Explore
                      <ArrowRightIcon />
                    </CTA>
                    <CTA compact secondary href={category.downloadHref}>
                      <DownloadIcon />
                      Download
                    </CTA>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="relative flex w-max gap-x-4">
                    {category.imageUrls.map((image, i) => (
                      <Image
                        key={i}
                        src={image}
                        height={232}
                        width={260}
                        alt={`Minimal - ${category.title} preview`}
                        className="rounded-md"
                      />
                    ))}
                    <div className="absolute bottom-0 h-1/2 w-full bg-[linear-gradient(to_bottom,transparent,#111111)]" />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
};
