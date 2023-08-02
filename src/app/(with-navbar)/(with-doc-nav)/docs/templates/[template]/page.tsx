import { notFound } from "next/navigation";
import Image from "next/image";
import { templates } from "@templates";
import { DocArticle, MdxH1, MdxH2, MdxP } from "@components/MdxComponents";
import { CTA } from "@components/CTA";

type TemplatePageProps = {
  params: {
    template: string;
  };
};

async function loadTemplate(templateId: string) {
  const template = templates.find((t) => t.id === templateId);
  if (!template) return null;
  return template;
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const template = await loadTemplate(params.template);

  if (!template) notFound();
  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden p-4 lg:py-0">
      <DocArticle>
        <div className="flex w-1/2 flex-col gap-4">
          <MdxP className="mb-2">{template.shortDescription}</MdxP>
          <MdxH1>{template.name}</MdxH1>
          <MdxP>{template.description}</MdxP>
          <CTA color="white" className="w-fit py-2">
            <a href="#template-categories" className="h-full w-full">
              Explore categories
            </a>
          </CTA>
        </div>
        <div className="w-full border-t border-neutral-800"></div>
        <ul className="grid" id="template-categories">
          {template.categories.map((category) => (
            <li
              key={category.name}
              className="grid min-h-[16rem] grid-cols-[20rem_1fr] gap-4 py-8"
            >
              <div className="flex flex-col gap-4">
                <MdxH2>{category.name}</MdxH2>
                <MdxP>{category.description}</MdxP>
                {category.href && (
                  <CTA
                    color="white"
                    className="w-fit py-2"
                    target="_blank"
                    href={category.href}
                  >
                    See preview
                  </CTA>
                )}
              </div>
              <div className="flex gap-4 overflow-x-scroll">
                {category.imageUrl.map((url, i) => (
                  <Image
                    key={i}
                    src={url}
                    height={240}
                    width={200}
                    alt="Category image preview"
                    className="rounded-md"
                  ></Image>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </DocArticle>
    </div>
  );
}

export const generateStaticParams = () =>
  templates.map((template) => ({
    template: template.id,
  }));
