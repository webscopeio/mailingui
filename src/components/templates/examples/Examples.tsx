import { Tabs, Tab } from "nextra/components";
import { useData } from "nextra/data";
import { ExamplePreview } from "./ExamplePreview";
import { ExampleCode } from "./ExampleCode";
import { CTA } from "@components/ui/CTA";

type Example = {
  name: string;
  type: string;
  html: string;
  demoCode: string;
  markup: string;
};

export const Examples = () => {
  const { examples } = useData() as { examples: Example[] };

  const onFormSubmit = async (html: string) => {
    try {
      const response = await fetch("https://react.email/api/send/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "hello@hectorsosa.me",
          subject: "React Email",
          html,
        }),
      });

      if (response.status === 429) {
        const { error } = await response.json();
        alert(error);
      }
    } catch (e) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="space-y-12 py-6">
      {examples.map((example, id: number) => (
        <div key={id}>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
            {transformComponentName(example.name)}
          </h3>
          <CTA onClick={() => onFormSubmit(example.html)} compact>
            Test
          </CTA>
          <Tabs items={["Preview", "Code", "HTML"]}>
            <Tab>
              <ExamplePreview html={example.html} />
            </Tab>
            <Tab>
              <ExampleCode code={example.demoCode} lang={"tsx"} />
            </Tab>
            <Tab>
              <ExampleCode code={example.markup} lang={"html"} />
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
