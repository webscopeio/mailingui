import { CodeType, EmailCodes } from "./types";
import { CopyButton } from "@components/CopyButton";
import { IconButton } from "@components/IconButton";
import { CodeIcon, EyeIcon, SunIcon } from "@components/Icons";

type Props = {
  showPreview: boolean;
  setShowPreview: (showPreview: boolean) => void;
  codeType: CodeType;
  setCodeType: (codeType: CodeType) => void;
  emailCodes: EmailCodes;
};

export const ComponentOptions = ({
  showPreview,
  setShowPreview,
  codeType,
  setCodeType,
  emailCodes,
}: Props) => (
  <div className="flex w-full items-center justify-between">
    <div className="w-60 rounded-3xl bg-dark-800 p-1">
      <button
        className={`inline-flex w-1/2 items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ${
          showPreview
            ? "bg-pink-to-purple-gradient text-white"
            : "bg-transparent text-dark-100"
        } `}
        onClick={() => setShowPreview(true)}
      >
        <EyeIcon />
        <span className="ml-2">Preview</span>
      </button>
      <button
        className={`inline-flex w-1/2 items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ${
          !showPreview
            ? "bg-pink-to-purple-gradient text-white"
            : "bg-transparent text-dark-100"
        } `}
        onClick={() => setShowPreview(false)}
      >
        <CodeIcon />
        <span className="ml-2">Code</span>
      </button>
    </div>
    <div className="flex items-center justify-between gap-3">
      <select
        className="h-10 rounded-3xl border border-r-8 border-transparent bg-dark-800 px-3 text-xs font-bold"
        value={codeType}
        onChange={(e) => setCodeType(e.target.value as Props["codeType"])}
      >
        <option value="htmlCode">HTML</option>
        {!!emailCodes["mjmlCode"] && <option value="mjmlCode">MJML</option>}
        {!!emailCodes["reactEmailCode"] && (
          <option value="reactEmailCode">React Email</option>
        )}
      </select>
      <CopyButton textToCopy={emailCodes[codeType] ?? "Nothing to copy"} />
      <IconButton>
        <SunIcon />
      </IconButton>
    </div>
  </div>
);
