"use client";
import { Tabs } from "@components/Tabs";
import { useState } from "react";
import { CodeIcon, EyeIcon, SunIcon } from "@components/Icons";
import { CopyButton } from "@components/CopyButton";
import { IconButton } from "@components/IconButton";

type Code = "mjml" | "html";

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

  const selectedCode = codeViewType === "mjml" ? mjml : html;

  return (
    <Tabs.Root defaultValue="preview">
      <div className="min-h-[2.5rem] flex items-center justify-between">
        <h2 className="text-sm md:text-xl text-neutral-400 truncate">
          {title}
        </h2>
        <div className="flex items-center justify-between gap-x-3 ml-4">
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
          <div className="hidden sm:block ml-3 mr-3 h-5 w-px bg-dark-100" />
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
            <IconButton>
              <SunIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-6">
        <Tabs.Content value="preview">
          <iframe
            title="Primary buttons"
            srcDoc={html}
            className="mx-auto w-full overflow-hidden rounded-3xl ring-1"
            onLoad={(event) => {
              const iframe = event.target as HTMLIFrameElement;
              if (iframe?.contentWindow) {
                iframe.style.height =
                  iframe.contentWindow.document.body.scrollHeight + "px";
              }
            }}
          />
        </Tabs.Content>
        <Tabs.Content value="code">
          <div className="w-full focus:outline-none">
            <pre className="flex overflow-auto whitespace-pre-wrap rounded-2xl text-sm leading-[1.5714285714] text-white">
              <code className="w-full bg-dark-800 p-4">{selectedCode}</code>
            </pre>
          </div>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};
