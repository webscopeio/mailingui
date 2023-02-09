import TemplateTypeItem from "../templateTypeItem/TemplateTypeItem";

type Props = {
  templates: {
    title: string;
    htmlPreview: string;
    htmlCode: string;
    mjmlCode: string;
  }[];
  type: string;
};

export default function TemplateTypeList({ templates }: Props) {
  return (
    <div className="flex flex-col items-center m-5">
      {templates.map(({ title, htmlPreview, htmlCode, mjmlCode }) => {
        return (
          <TemplateTypeItem
            key={title}
            title={title}
            htmlPreview={htmlPreview}
            htmlCode={htmlCode}
            mjmlCode={mjmlCode}
          />
        );
      })}
    </div>
  );
}
