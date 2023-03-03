"use client";
import { useState } from "react";

type Props = {
  title: string;
  htmlPreview: string;
  htmlCode: string;
  mjmlCode?: string;
  reactEmailCode?: string;
};

export default function TemplateTypeItem({
  title,
  htmlPreview,
  htmlCode,
  mjmlCode,
  reactEmailCode,
}: Props) {
  const [showPreview, setShowPreview] = useState(true);
  const [codeType, setCodeType] = useState<"html" | "mjml">("html");

  return (
    <div className="flex flex-col w-full mt-10">
      <div className="flex justify-between max-w-full items-center mb-2">
        <h1 className="text-sm font-bold">{title}</h1>
        <div className="flex items-center gap-x-2">
          <button
            className={`px-2 py-1 rounded-md text-xs font-bold ${
              !showPreview ? "bg-slate-900" : "bg-slate-500"
            } `}
            onClick={() => setShowPreview(true)}
          >
            Preview
          </button>
          <button
            className={`px-2 py-1 rounded-md text-xs font-bold ${
              showPreview ? "bg-slate-900" : "bg-slate-500"
            } `}
            onClick={() => setShowPreview(false)}
          >
            {"< > "} Code
          </button>
          <select
            className="px-2 py-1 rounded-md text-xs font-bold bg-slate-900"
            value={codeType}
            onChange={(e) => setCodeType(e.target.value as "html" | "mjml")}
          >
            <option value="html">HTML</option>
            {!!mjmlCode && <option value="mjml">MJML</option>}
            {!!reactEmailCode && (
              <option value="react email">React Email</option>
            )}
          </select>
        </div>
      </div>
      <div className="flex justify-between max-w-full">
        {showPreview ? (
          <iframe
            title="Primary buttons"
            srcDoc={htmlPreview}
            className="w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10"
            onLoad={(event) => {
              const iframe = event.target as HTMLIFrameElement;
              if (iframe?.contentWindow) {
                iframe.style.height =
                  iframe.contentWindow.document.body.scrollHeight + "px";
              }
            }}
          />
        ) : (
          <div className="mt-4 focus:outline-none">
            <pre className="flex overflow-auto bg-slate-800 rounded-b-lg text-sm leading-[1.5714285714] text-white sm:rounded-t-lg language-htm">
              <code className="p-4 w-5/6">
                {codeType === "html"
                  ? htmlCode
                  : codeType === "mjml"
                  ? mjmlCode
                  : reactEmailCode}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
