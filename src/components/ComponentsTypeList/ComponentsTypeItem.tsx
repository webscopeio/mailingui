"use client";
import { useState } from "react";
import { ComponentOptions } from "./ComponentOptions";
import { CodeType, EmailCodes } from "./types";

type Props = {
  title: string;
  htmlPreview: string;
  emailCodes: EmailCodes;
};

export const ComponentsTypeItem = ({
  title,
  htmlPreview,
  emailCodes,
}: Props) => {
  const [showPreview, setShowPreview] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [codeType, setCodeType] = useState<CodeType>("htmlCode");

  return (
    <div className="mx-4 my-10 flex w-full flex-col">
      <div className="mb-2 flex max-w-full items-center justify-between">
        <h1 className="text-sm font-bold text-neutral-400">{title}</h1>
        <div className="flex w-2/3">
          {showOptions ? (
            <ComponentOptions
              showPreview={showPreview}
              setShowPreview={setShowPreview}
              codeType={codeType}
              setCodeType={setCodeType}
              emailCodes={emailCodes}
            />
          ) : (
            <span
              className="ml-auto cursor-pointer bg-pink-to-purple-gradient bg-clip-text text-sm font-bold text-transparent hover:opacity-70"
              onClick={() => setShowOptions(true)}
            >
              Get a code &#x2192;
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 flex w-full justify-center">
        {showPreview ? (
          <iframe
            title="Primary buttons"
            srcDoc={htmlPreview}
            className="mx-auto w-full overflow-hidden rounded-2xl ring-1"
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
              <code className="w-full bg-dark-800 p-4">
                {emailCodes[codeType]}
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
