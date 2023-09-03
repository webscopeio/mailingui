import * as React from "react";
import { Tabs, Tab } from "nextra/components";
import { useData } from "nextra/data";
import { CheckIcon, ChevronDownIcon, Loader2Icon, XIcon } from "lucide-react";
import { email, safeParse, string } from "valibot";
import { ExamplePreview } from "./ExamplePreview";
import { ExampleCode } from "./ExampleCode";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/Popover";
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
  return (
    <div className="space-y-12 py-6">
      {examples.map((example, id: number) => (
        <div key={id}>
          <header className="flex items-end justify-between gap-6">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-100">
              {transformComponentName(example.name)}
            </h3>
            <TestPopover html={example.html} />
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

const TestPopover: React.FC<{ html: string }> = ({ html }) => {
  const [popoverForm, setPopoverForm] = React.useState({
    email: "",
    isValid: true,
  });
  const [testState, setTestState] = React.useState<
    "IDLE" | "PENDING" | "SUCCESS"
  >("IDLE");

  React.useEffect(() => {
    if (testState !== "SUCCESS") return;
    const timerId = setTimeout(() => {
      setTestState("IDLE");
    }, 3500);

    return () => {
      clearTimeout(timerId);
    };
  }, [testState]);

  const onFormSubmit = async (e: React.FormEvent, html: string) => {
    e.preventDefault();
    const res = safeParse(string([email()]), popoverForm.email);
    if (!res.success) {
      setPopoverForm({ ...popoverForm, isValid: false });
      return;
    }
    setTestState("PENDING");
    try {
      const response = await fetch("https://react.email/api/send/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: popoverForm.email,
          subject: "MailingUI",
          html,
        }),
      });
      if (response.status === 429) {
        const { error } = await response.json();
        alert(error);
      }
      setTestState("SUCCESS");
      setPopoverForm({ ...popoverForm, email: "" });
    } catch (e) {
      alert("Something went wrong. Please try again.");
    } finally {
      setTestState("IDLE");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="group relative inline-flex items-center gap-x-1.5 text-sm hover:opacity-80">
          Test
          <ChevronDownIcon className="h-4 w-4 rotate-0 scale-100 transition-all group-data-[state=open]:-rotate-90 group-data-[state=open]:scale-0" />
          <XIcon className="absolute right-0 h-4 w-4 rotate-90 scale-0 transition-all group-data-[state=open]:rotate-0 group-data-[state=open]:scale-100" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="space-y-2">
          <p className="text-sm text-gray-400">Email</p>
          <form
            onSubmit={(e) => onFormSubmit(e, html)}
            className="w-full space-y-3"
            method="post"
          >
            <div className="space-y-3">
              <input
                className="h-12 w-full rounded-xl border border-gray-400 bg-stone-900 p-4 text-sm md:w-72"
                type="text"
                name="email_address"
                placeholder="Your email"
                aria-label="email"
                value={popoverForm.email}
                onChange={(e) => {
                  setPopoverForm({
                    email: e.target.value,
                    isValid: true,
                  });
                }}
              />
              <CTA compact className="sm:w-fit" disabled={!popoverForm.isValid}>
                {testState === "PENDING" && (
                  <Loader2Icon className="animate-spin" />
                )}
                {testState === "SUCCESS" && <CheckIcon />}
                Send
              </CTA>
            </div>
            <p
              className={`text-sm font-medium ${
                popoverForm.isValid ? "text-gray-400" : "text-pink-600"
              }`}
            >
              {popoverForm.isValid
                ? "Powered by React.email"
                : "Please provide a valid email address."}
            </p>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};
