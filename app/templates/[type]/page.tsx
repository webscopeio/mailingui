import fs from "fs";
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
  const rootPath = process.cwd();
  return {
    type: type,
    templates: (await Promise.all(
      Object.values(templates[type]).map(async ({ title, ...paths }) => {
        return {
          title,
          ...(
            await Promise.all(
              Object.entries(paths).map(async ([key, path]) => {
                if (path) {
                  try {
                    const data = await fs.promises.readFile(
                      `${rootPath}${path}`,
                      "utf8"
                    );
                    return { [key]: data };
                  } catch (err) {
                    throw err;
                  }
                }
              })
            )
          ).reduce((acc, curr) => {
            return { ...acc, ...curr };
          }, {}),
        };
      })
    )) as Template[],
  };
}

export default async function TemplateType({ params: { type } }: Props) {
  const { templates } = await getTemplates(type);
  return <TemplateTypeList templates={templates} type={type} />;
}
