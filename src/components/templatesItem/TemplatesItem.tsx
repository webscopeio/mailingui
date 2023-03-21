"use client";
import Link from "next/link";
import { useState } from "react";
import ShareIcon from "public/static/svg/share.svg";
import TemplateOptions from "@/components/templateOptions/TemplateOptions";

type Props = {
  desktopPreview: string;
  mobilePreview: string;
};

export default function TemplatesItem({
  desktopPreview,
  mobilePreview,
}: Props) {
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
        <ShareIcon className="cursor-pointer hover:opacity-70" />
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
          <div className="w-full focus:outline-none">
            <pre className="language-htm flex overflow-auto whitespace-pre-wrap rounded-2xl text-sm leading-[1.5714285714] text-white">
              <code className="w-full bg-dark-800 p-4">{desktopPreview}</code>
            </pre>
          </div>
        )}
      </div>
    </>
  );
}
