import { Tabs, Tab } from "nextra/components";
import { useData } from "nextra/data";
import { ExamplePreview } from "./ExamplePreview";
import { ExampleCode } from "./ExampleCode";

type Example = {
  name: string;
  type: string;
  html: string;
  demoCode: string;
  markup: string;
};

export const Examples = () => {
  const { examples } = useData() as { examples: Example[] };
  return (
    <div className="space-y-12 py-6">
      {examples.map((example, id: number) => (
        <div key={id}>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
            {transformComponentName(example.name)}
          </h3>
          <Tabs items={["Preview", "Code", "HTML"]}>
            <Tab>
              <ExamplePreview html={example.html} />
            </Tab>
            <Tab>
              <ExampleCode code={example.demoCode} />
            </Tab>
            <Tab>
              <ExampleCode code={example.markup} />
            </Tab>
          </Tabs>
        </div>
      ))}
    </div>
  );
};

function transformComponentName(componentName: string): string {
  const transformedName = componentName
    .replace(/-/g, " ")
    .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());

  return transformedName;
}
