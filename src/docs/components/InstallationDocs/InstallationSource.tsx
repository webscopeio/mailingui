import { TabbedCode, TabbedCodeItem } from "@components/Code";

export type ComponentSourceProps = {
  type: string;
  id: string;
  source: string;
};

export const InstallationSource = ({
  componentsSource,
}: {
  componentsSource: ComponentSourceProps[];
}) => {
  const tabs: TabbedCodeItem[] = componentsSource.map((component) => ({
    id: `${component.id}.tsx`,
    htmlCode: component.source,
  }));
  return (
    <div className="relative overflow-hidden rounded-md">
      <TabbedCode
        tabs={tabs}
        collapsedClassName="max-h-[350px]"
        className="min-h-[350px]"
      ></TabbedCode>
    </div>
  );
};
