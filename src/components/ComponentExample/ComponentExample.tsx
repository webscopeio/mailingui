"use client";
import { useState } from "react";
import { Tabs } from "@components/Tabs";
import { CodeIcon, EyeIcon } from "@components/Icons";
import { CopyButton } from "@components/CopyButton";
import { CodeBlock } from "@components/CodeBlock";
import { FramePreview } from "@components/FramePreview";
import { clsx } from "@utils";

type Code = "mjml" | "html";

const supportedLangs: Record<Code, string> = {
  mjml: "html",
  html: "html",
};

export type ComponentExampleProps = {
  title: string;
  mjml: string;
  html: string;
  transformedHtml?: {
    light: string;
    dark: string;
  };
};

export const ComponentExample = ({
  title,
  mjml,
  html,
  transformedHtml,
}: ComponentExampleProps) => {
  const [codeViewType, setCodeViewType] = useState<Code>("mjml");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [colorTheme, setColorTheme] = useState<"light" | "dark">("light");

  const selectedCode = codeViewType === "mjml" ? mjml : html;

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={(value) => {
        setActiveTab(value as "preview" | "code");
      }}
    >
      <div className="flex min-h-[2.5rem] items-center justify-between">
        <h2 className="truncate text-sm text-neutral-400 md:text-xl">
          {title}
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
            className="h-10 rounded-3xl border border-r-8 border-transparent bg-dark-800 px-3 text-xs font-bold"
            value={codeViewType}
            onChange={(e) => setCodeViewType(e.target.value as Code)}
          >
            <option value="html">HTML</option>
            <option value="mjml">MJML</option>
          </select>
          <div className="hidden sm:block">
            <CopyButton textToCopy={selectedCode} />
          </div>
          {!!transformedHtml && (
            <div className="hidden sm:block">
              <IconButton
                onClick={() =>
                  setColorTheme(colorTheme === "light" ? "dark" : "light")
                }
              >
                {colorTheme === "dark" ? <SunIcon /> : <MoonIcon />}
              </IconButton>
            </div>
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
            darkMode={colorTheme === "dark"}
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
