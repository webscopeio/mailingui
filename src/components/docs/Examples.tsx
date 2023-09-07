import { Tabs, Tab } from "nextra/components";
import { useData } from "nextra/data";
import { Preview } from "@components/shared/Preview";
import { Codeblock } from "@components/shared/Codeblock";

type Example = {
  name: string;
  type: string;
  html: string;
  demoCode: string;
  mdx?: string;
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
          <Tabs
            items={
              example.mdx ? ["Preview", "Code", "MDX"] : ["Preview", "Code"]
            }
          >
            <Tab>
              <Preview type={example.type} html={example.html} />
            </Tab>
            <Tab>
              <Codeblock code={example.demoCode} />
            </Tab>
            {example.mdx && (
              <Tab>
                <Codeblock code={example.mdx} lang={"mdx"} />
              </Tab>
            )}
          </Tabs>
        </div>
      ))}
    </div>
  );
};

function transformComponentName(componentName: string): string {
  const transformedName = componentName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // Insert space between uppercase letters followed by lowercase letter

  return transformedName;
}
