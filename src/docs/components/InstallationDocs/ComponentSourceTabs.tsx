import { TabbedCode, TabbedCodeItem } from "@components/Code";

export type ComponentSourceProps = {
  type: string;
  id: string;
  source: string;
};

export const ComponentSourceTabs = ({
  sources,
  order,
}: {
  sources: ComponentSourceProps[];
  order?: ComponentSourceProps["id"][];
}) => {
  const localSources = order
    ? sources
        .filter((source) => order.includes(source.id))
        .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id))
    : sources;

  const tabs: TabbedCodeItem[] = localSources.map((component) => ({
    id: `${component.id}.tsx`,
    htmlCode: component.source,
  }));
  return (
    <div className="not-prose relative overflow-hidden rounded-md">
      <TabbedCode
        tabs={tabs}
        collapsedClassName="max-h-[350px]"
        className="min-h-[350px]"
      ></TabbedCode>
    </div>
  );
};
