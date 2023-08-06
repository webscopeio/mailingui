import { join } from "path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { templates } from "@templates";
import { DocArticle, MdxH1, MdxH2, MdxP } from "@components/MdxComponents";
import { DownloadIcon, OpenBlankIcon } from "@components/Icons";
import { CTA } from "@components/CTA";
import { openGraphImageSize, sharedOpenGraphMetadata } from "@constants";

type TemplatePageProps = {
  params: {
    template: string;
  };
};

const SERVICE_URL = "https://download-directory.github.io/?url=";
const REPO_URL = "https://github.com/webscopeio/mailingui/tree/main/src/emails";

function findPageTemplateItem(templateId: string) {
  return templates.find((template) => template.id === templateId);
}

async function loadTemplate(templateId: string) {
  const template = templates.find((t) => t.id === templateId);
  if (!template) return null;
  return template;
}

function getDownloadUrl(folder: string) {
  return `${SERVICE_URL}${join(REPO_URL, folder)}`;
}

export function generateMetadata({ params }: TemplatePageProps): Metadata {
  const doc = findPageTemplateItem(params.template);
  const title = doc?.name ?? "Templates";
  const description = doc?.description ?? "Explore templates";

  return {
    title,
    description,
    openGraph: {
      ...sharedOpenGraphMetadata,
      title,
      description,
      url: "https://mailingui.com/docs",
      images: [
        {
          ...openGraphImageSize,
          url: "/static/images/og/components.png",
        },
      ],
    },
  };
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const template = await loadTemplate(params.template);

  if (!template) notFound();
  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden p-4 lg:py-0">
      <DocArticle>
        <div className="flex w-full flex-col gap-4 md:w-2/3 lg:w-1/2">
          <MdxP className="mb-2">{template.shortDescription}</MdxP>
          <MdxH1>{template.name}</MdxH1>
          <MdxP>{template.description}</MdxP>
          <div className="grid grid-cols-2 gap-2">
            <CTA color="white" className="grid place-content-center py-2">
              <a href="#template-categories" className="h-full w-full">
                Explore categories
              </a>
            </CTA>
            <CTA
              color="black"
              href={getDownloadUrl(template.downloadFolder)}
              target="_blank"
            >
              <DownloadIcon className="mr-2" />
              Download all
            </CTA>
          </div>
        </div>
        <div className="w-full border-t border-neutral-800"></div>
        <ul className="grid gap-16 py-4" id="template-categories">
          {template.categories.map((category) => (
            <li
              key={category.name}
              className="grid min-h-[16rem] gap-8 lg:grid-cols-[24rem_1fr] lg:gap-4"
            >
              <div className="flex flex-col gap-4">
                <MdxH2>{category.name}</MdxH2>
                <MdxP>{category.description}</MdxP>
                <div className="grid max-w-[32rem] grid-cols-2 gap-2">
                  {category.href && (
                    <CTA
                      color="white"
                      className="w-full py-2"
                      target="_blank"
                      href={category.href}
                    >
                      <OpenBlankIcon className="mr-2" />
                      See preview
                    </CTA>
                  )}
                  <CTA
                    color="black"
                    className="w-full py-2"
                    href={getDownloadUrl(category.downloadFolder)}
                    target="_blank"
                  >
                    <DownloadIcon className="mr-2" />
                    Download
                  </CTA>
                </div>
              </div>
              <div className="overflow-x-scroll">
                <div className="relative flex w-max gap-4">
                  {category.imageUrl.map((url, i) => (
                    <Image
                      key={i}
                      src={url}
                      height={232}
                      width={260}
                      alt={`Minimal - ${category.name} image preview`}
                      className="rounded-md"
                    ></Image>
                  ))}
                  <div className="absolute bottom-0 h-1/2 w-full bg-[linear-gradient(to_bottom,transparent,#000000)]" />
                </div>
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
