"use client";
import EyeIcon from "public/static/svg/eye.svg";
import CodeIcon from "public/static/svg/code.svg";
import CopyIcon from "public/static/svg/copy.svg";
import SunIcon from "public/static/svg/sun.svg";
import CheckIcon from "public/static/svg/check.svg";
import { useClipboard } from "@/hooks/useClipboard";

type Props = {
  showPreview: boolean;
  setShowPreview: (showPreview: boolean) => void;
  codeType: "html" | "mjml" | "react email";
  setCodeType: (codeType: "html" | "mjml" | "react email") => void;
  mjmlCode?: string;
  reactEmailCode?: string;
  htmlCode: string;
};

export default function ComponentOptions({
  showPreview,
  setShowPreview,
  codeType,
  setCodeType,
  mjmlCode,
  reactEmailCode,
  htmlCode,
}: Props) {
  const clipboard = useClipboard();

  const copyCode = () => {
    switch (codeType) {
      case "html":
        clipboard.copy(htmlCode);
        break;
      case "mjml":
        clipboard.copy(mjmlCode || "");
        break;
      case "react email":
        clipboard.copy(reactEmailCode || "");
        break;
    }
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-60 rounded-3xl bg-dark-800 p-1">
        <button
          className={`w-1/2 rounded-3xl px-3 py-2 text-sm font-medium ${
            showPreview
              ? "bg-pink-to-purple-gradient text-white"
              : "bg-transparent text-dark-100"
          } `}
          onClick={() => setShowPreview(true)}
        >
          <EyeIcon className="mr-2 inline-block" />
          <span className="align-middle">Preview</span>
        </button>
        <button
          className={`w-1/2 rounded-3xl px-3 py-2 text-sm font-medium ${
            !showPreview
              ? "bg-pink-to-purple-gradient text-white"
              : "bg-transparent text-dark-100"
          } `}
          onClick={() => setShowPreview(false)}
        >
          <CodeIcon className="mr-2 inline-block" />
          <span className="align-middle">Code</span>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <select
          className="h-10 rounded-3xl border border-r-8 border-transparent bg-dark-800 px-3 text-xs font-bold"
          value={codeType}
          onChange={(e) => setCodeType(e.target.value as Props["codeType"])}
        >
          <option value="html">HTML</option>
          {!!mjmlCode && <option value="mjml">MJML</option>}
          {!!reactEmailCode && <option value="react email">React Email</option>}
        </select>
        <div
          className="ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-dark-800 text-dark-100 hover:opacity-70"
          onClick={copyCode}
        >
          {clipboard.copied ? <CheckIcon width={20} /> : <CopyIcon />}
        </div>
        <div className="ml-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-dark-800 text-dark-100 hover:opacity-70">
          <SunIcon />
        </div>
      </div>
    </div>
  );
}
