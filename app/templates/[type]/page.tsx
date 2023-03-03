import { readFileSync } from "fs";
import TemplateTypeList from "@/components/templateTypeList/TemplateTypeList";
import { templates } from "@/utils/constants";

type Params = {
  type: keyof typeof templates;
};

type Props = {
  params: Params;
};

type Template = {
  title: string;
  htmlPreview: string;
  htmlCode: string;
  mjmlCode?: string;
  reactEmailCode?: string;
};

async function getTemplates(type: Params["type"]) {
  return {
    type: type,
    templates: (await Promise.all(
      templates[type]
        ? Object.values(templates[type]).map(({ title, ...paths }) => {
            return {
              title,
              ...Object.entries(paths)
                .map(([key, path]) => {
                  if (path) {
                    const fileContent = readFileSync(path, "utf8");
                    return { [key]: fileContent };
                  }
                })
                .reduce((acc, curr) => {
                  return { ...acc, ...curr };
                }, {}),
            };
          })
        : []
    )) as Template[],
  };
}

export default async function TemplateType({ params: { type } }: Props) {
  const { templates } = await getTemplates(type);
  return <TemplateTypeList templates={templates} type={type} />;
}

export async function generateStaticParams() {
  const templateTypes = Object.keys(templates) as Params["type"][];
  return templateTypes.map((type) => ({ type }));
}
