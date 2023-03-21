import ComponentsTypeItem from "../componentsTypeItem/ComponentsTypeItem";

type Props = {
  components: {
    title: string;
    htmlPreview: string;
    htmlCode: string;
    mjmlCode?: string;
    reactEmailCode?: string;
  }[];
  title: string;
};

export default function ComponentsTypeList({ components, title }: Props) {
  return (
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
}
