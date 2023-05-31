"use client";
import { useState } from "react";
import { Tabs } from "@components/Tabs";
import { CodeIcon, EyeIcon, MoonIcon, SunIcon } from "@components/Icons";
import { CopyButton } from "@components/CopyButton";
import { CodeBlock } from "@components/CodeBlock";
import { FramePreview } from "@components/FramePreview";
import { clsx } from "@utils";
import { IconButton } from "@components/IconButton";

type Code = "mjml" | "react" | "html";

const supportedLangs: Record<Code, string> = {
  mjml: "html",
  react: "javascript",
  html: "html"
};

export type ComponentExampleProps = {
  title: string;
  mjml: string;
  react: string;
  html: string;
  transformedHtml?: {
    light: string;
    dark: string;
  };
};

export const ComponentExample = ({
  title,
  mjml,
  react,
  html,
  transformedHtml,
}: ComponentExampleProps) => {
  const [codeViewType, setCodeViewType] = useState<Code>(
    react ? "react" : "mjml"
  );
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [colorTheme, setColorTheme] = useState<"light" | "dark">("light");

  const selectedCode = codeViewType === "react"
    ? react
    : codeViewType === "mjml"
      ? mjml
      : html;

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={(value) => {
        setActiveTab(value as "preview" | "code");
      }}
    >
      <div className="flex min-h-[2.5rem] items-center justify-between">
        <h2 className="truncate text-sm text-neutral-400 md:text-xl">
          {transformComponentName(title)}
        </h2>
        <div className="ml-4 flex items-center justify-between gap-x-3">
          <Tabs.List aria-label="A label">
            <Tabs.Trigger value="preview">
              <EyeIcon />
              <span className="sr-only md:not-sr-only md:ml-2">Preview</span>
            </Tabs.Trigger>
            <Tabs.Trigger value="code">
              <CodeIcon />
              <span className="sr-only md:not-sr-only md:ml-2">Code</span>
            </Tabs.Trigger>
          </Tabs.List>
          <div className="mx-3 hidden h-5 w-px bg-dark-100 sm:block" />
          <select
            className="form-select h-10 rounded-3xl border border-transparent bg-dark-800 text-xs font-bold"
            value={codeViewType}
            onChange={(e) => setCodeViewType(e.target.value as Code)}
          >
            <option disabled={!react} value="react">
              React
            </option>
            <option disabled={!mjml} value="mjml">
              MJML
            </option>
            <option value="html">
              HTML
            </option>
          </select>
          <div className="hidden sm:block">
            <CopyButton textToCopy={selectedCode} />
          </div>
          {transformedHtml && (
            <IconButton
              onClick={() =>
                setColorTheme(colorTheme === "light" ? "dark" : "light")
              }
            >
              {colorTheme === "dark" ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          )}
        </div>
      </div>
      <div className="mt-4 md:mt-6">
        <Tabs.Content
          value="preview"
          /**
           * The preview tab should always be mounted for 2 reasons:
           * To avoid flicker when HTML document loads in FrameReview
           * when switching between tabs;
           * And to keep track of the Resizable width inside FrameReview
           * when switching between tabs.
           */
          forceMount
          className={clsx(activeTab === "code" && "hidden")}
        >
          <FramePreview
            title={title}
            html={transformedHtml ? transformedHtml[colorTheme] : html}
            className="h-[400px] w-full rounded-3xl border border-dark-100"
          />
        </Tabs.Content>
        <Tabs.Content value="code">
          <div className=" h-[400px] w-full overflow-auto rounded-3xl border border-transparent bg-[#1e1e1e]">
            <CodeBlock language={supportedLangs[codeViewType]}>
              {selectedCode}
            </CodeBlock>
          </div>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

function transformComponentName(componentName: string): string {
  const transformedName = componentName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // Insert space between uppercase letters followed by lowercase letter

  return transformedName;
}
