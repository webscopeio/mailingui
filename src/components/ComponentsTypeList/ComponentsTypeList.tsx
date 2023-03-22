import { ComponentsTypeItem } from "./ComponentsTypeItem";

export type ComponentsTypeListProps = {
  components: {
    title: string;
    htmlPreview: string;
    htmlCode: string;
    mjmlCode?: string;
    reactEmailCode?: string;
  }[];
  title: string;
};

export const ComponentsTypeList = ({ components, title }: ComponentsTypeListProps) => (
  <div className="mx-auto mt-24 flex max-w-[900px] flex-col items-center">
    <h1 className="mb-16 self-start text-4xl font-bold">{title}</h1>
    {components.map(
      ({ title, htmlPreview, htmlCode, mjmlCode, reactEmailCode }) => {
        return (
          <ComponentsTypeItem
            key={title}
            title={title}
            htmlPreview={htmlPreview}
            emailCodes={{
              htmlCode,
              mjmlCode,
              reactEmailCode,
            }}
          />
        );
      }
    )}
  </div>
);
