import { readFileSync } from "fs";
import { ComponentsTypeList } from "@components/ComponentsTypeList";
import { emailComponents } from "@constants";

type EmailComponent = {
  title: string;
  htmlPreview: string;
  htmlCode: string;
  mjmlCode?: string;
  reactEmailCode?: string;
};

type Props = {
  params: {
    type: string;
  };
};

function getComponents(type: string) {
  const componentType = emailComponents.find(
    (component) => component.type === type
  );
  if (!componentType) {
    throw new Error("No component type found");
  }
  return {
    title: componentType.title,
    components: componentType.components.map(
      ({ title, ...paths }: EmailComponent) => {
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
      }
    ) as EmailComponent[],
  };
}

export default function ComponentType({ params: { type } }: Props) {
  const { components, title } = getComponents(type);
  return <ComponentsTypeList components={components} title={title} />;
}

export function generateStaticParams() {
  return emailComponents.map((item) => ({ type: item.type }));
}
