import * as React from "react";
import { Tabs, Tab } from "nextra/components";
import { useData } from "nextra/data";
import { ArrowRightIcon, CheckIcon, Loader2Icon } from "lucide-react";
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
  const [testState, setTestState] = React.useState<
    "IDLE" | "PENDING" | "SUCCESS"
  >("IDLE");

  React.useEffect(() => {
    if (testState !== "SUCCESS") return;
    const timerId = setTimeout(() => {
      setTestState("IDLE");
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [testState]);

  const onFormSubmit = async (html: string) => {
    try {
      setTestState("PENDING");
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
      setTestState("SUCCESS");
    } catch (e) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="space-y-12 py-6">
      {examples.map((example, id: number) => (
        <div key={id}>
          <header className="flex items-center gap-6">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
              {transformComponentName(example.name)}
            </h3>
            <button
              className="inline-flex gap-x-2 hover:opacity-80"
              onClick={() => onFormSubmit(example.html)}
            >
              Test
              {testState === "IDLE" && <ArrowRightIcon />}
              {testState === "PENDING" && (
                <Loader2Icon className="animate-spin" />
              )}
              {testState === "SUCCESS" && <CheckIcon />}
            </button>
          </header>
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
