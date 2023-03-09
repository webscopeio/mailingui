import { readFileSync } from "fs";
import ComponentsTypeList from "@/components/componentsTypeList/ComponentsTypeList";
import { emailComponents } from "@/utils/constants";

type Props = {
  params: {
    type: string;
  };
};

type Component = {
  title: string;
  htmlPreview: string;
  htmlCode: string;
  mjmlCode?: string;
  reactEmailCode?: string;
};

async function getComponents(type: string) {
  const componentType = emailComponents.find(
    (component) => component.type === type
  );

  if (!componentType)
    return Promise.reject(new Error("No component type found"));

  return {
    title: componentType.title,
    components: (await Promise.all(
      componentType.components.map(({ title, ...paths }: Component) => {
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
    )) as Component[],
  };
}

export default async function ComponentType({ params: { type } }: Props) {
  const { components, title } = await getComponents(type);
  return <ComponentsTypeList components={components} title={title} />;
}

export async function generateStaticParams() {
  return emailComponents.map((item) => ({ type: item.type }));
}
