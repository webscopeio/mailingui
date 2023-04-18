"use client";
import { useState } from "react";
import { Tabs } from "@components/Tabs";
import {
  CodeIcon,
  DesktopIcon,
  EyeIcon,
  MoonIcon,
  SunIcon,
} from "@components/Icons";
import { CopyButton } from "@components/CopyButton";
import { IconButton } from "@components/IconButton";
import { CodeBlock } from "@components/CodeBlock";
import { FramePreview } from "@components/FramePreview";
import { MobileIcon } from "@components/Icons/MobileIcon";

type Code = "mjml" | "html";

const supportedLangs: Record<Code, string> = {
  mjml: "html",
  html: "html",
};

/** `mjml` playground's breakpoint is 320px */
const supportedViewports = {
  mobile: "320px",
  full: "100%",
} as const;

export type SupportedViewPorts =
  (typeof supportedViewports)[keyof typeof supportedViewports];

export type ComponentExampleProps = {
  title: string;
  mjml: string;
  html: string;
};

export const ComponentExample = ({
  title,
  mjml,
  html,
}: ComponentExampleProps) => {
  const [codeViewType, setCodeViewType] = useState<Code>("mjml");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const selectedCode = codeViewType === "mjml" ? mjml : html;

  return (
    <Tabs.Root defaultValue="preview">
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
          <div className="hidden sm:block">
            <IconButton onClick={() => setMobileView(!mobileView)}>
              {mobileView ? <DesktopIcon /> : <MobileIcon />}
            </IconButton>
          </div>
          <div className="hidden sm:block">
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-6">
        <Tabs.Content value="preview">
          <FramePreview
            title={title}
            html={html}
            darkMode={darkMode}
            previewWidth={mobileView ? "320px" : "100%"}
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
