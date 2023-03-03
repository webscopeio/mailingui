import TemplateTypeItem from "../templateTypeItem/TemplateTypeItem";

type Props = {
  templates: {
    title: string;
    htmlPreview: string;
    htmlCode: string;
    mjmlCode?: string;
    reactEmailCode?: string;
  }[];
  type: string;
};

export default function TemplateTypeList({ templates }: Props) {
  console.log("templates: ", templates);
  return (
    <div className="flex flex-col items-center m-5">
      {templates.map(
        ({ title, htmlPreview, htmlCode, mjmlCode, reactEmailCode }) => {
          return (
            <TemplateTypeItem
              key={title}
              title={title}
              htmlPreview={htmlPreview}
              htmlCode={htmlCode}
              mjmlCode={mjmlCode}
              reactEmailCode={reactEmailCode}
            />
          );
        }
      )}
    </div>
  );
}
