import { TabbedCode, TabbedCodeItem } from "@components/Code";
import { getComponentSource } from "@components/MdxComponents/utils";

export type ComponentSourceTabsProps = {
  type: string;
};

export const ComponentSourceTabs = async ({
  type,
}: ComponentSourceTabsProps) => {
  const localSources = await getComponentSource(type);

  const tabs: TabbedCodeItem[] = localSources.map((component) => ({
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
