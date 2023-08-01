import { notFound } from "next/navigation";
import Image from "next/image";
import { DocArticle, MdxH1, MdxH2, MdxP } from "@components/MdxComponents";
import { CTA } from "@components/CTA";

type Template = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  categories: TemplateCategory[];
};

type TemplateCategory = {
  name: string;
  description: string;
  imageUrl: string[];
  href: string;
};

type TemplatePageProps = {
  params: {
    template: string;
  };
};

const DEFAULT_TEMPLATE: Template = {
  id: "minimal",
  name: "Minimal",
  shortDescription: "Free email template",
  description:
    "Minimal is a simple and clean email template. It comes with three different email categories.",
  categories: [
    {
      name: "Events",
      description:
        "Events are a great way to get people together. Can be conference, a meetup, or a party.",
      href: "/preview/events",
      imageUrl: [
        "/static/images/templates-docs/test.png",
        "/static/images/templates-docs/test.png",
        "/static/images/templates-docs/test.png",
      ],
    },
    {
      name: "Marketing",
      description:
        "Marketing emails are a great way to promote your business with product announcement or a special offer.",
      href: "/preview/marketing",
      imageUrl: [
        "/static/images/templates-docs/test.png",
        "/static/images/templates-docs/test.png",
        "/static/images/templates-docs/test.png",
      ],
    },
    {
      name: "Newsletter",
      description:
        "Newsletters are a great way to keep your audience up-to-date with what's going on in your business.",
      href: "/preview/newsletter",
      imageUrl: [
        "/static/images/templates-docs/test.png",
        "/static/images/templates-docs/test.png",
        "/static/images/templates-docs/test.png",
      ],
    },
  ],
};

const loadTemplate = async (template: string): Promise<Template | null> => {
  if (template !== DEFAULT_TEMPLATE.id) return null;
  return DEFAULT_TEMPLATE;
};

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
            Explore categories
          </CTA>
        </div>
        <div className="w-full border-t border-neutral-800"></div>
        <ul className="grid">
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
