"use client";
import Link from "next/link";
import { useState } from "react";
import { TemplateOptions } from "./TemplateOptions";
import { ShareIcon } from "@components/Icons";
import { CodeBlock } from "@components/CodeBlock";

export type TemplatesItemProps = {
  desktopPreview: string;
  mobilePreview: string;
};

export const TemplatesItem = ({
  desktopPreview,
  mobilePreview,
}: TemplatesItemProps) => {
  const [active, setActive] = useState<"desktop" | "mobile" | "code">(
    "desktop"
  );

  return (
    <>
      <div className="flex items-center justify-between px-8 py-6">
        <Link
          href="/templates"
          className="text-base font-medium hover:opacity-70"
        >
          <span className="pr-1">&#129120;</span> Back to templates
        </Link>
        <TemplateOptions active={active} setActive={setActive} />
        <ShareIcon className="cursor-pointer text-white hover:opacity-70" />
      </div>

      <div className="mt-4 flex w-full justify-center pr-4">
        {active !== "code" ? (
          <iframe
            title="Primary buttons"
            srcDoc={active === "desktop" ? desktopPreview : mobilePreview}
            className="mx-auto w-full overflow-hidden ring-1"
            onLoad={(event) => {
              const iframe = event.target as HTMLIFrameElement;
              if (iframe?.contentWindow) {
                iframe.style.height =
                  iframe.contentWindow.document.body.scrollHeight + "px";
              }
            }}
          />
        ) : (
          <div className="inline-grid w-full focus:outline-none">
            <CodeBlock language="html">{desktopPreview}</CodeBlock>
          </div>
        )}
      </div>
    </>
  );
};
