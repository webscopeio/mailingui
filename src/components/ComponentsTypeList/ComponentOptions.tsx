import { CodeType, EmailCodes } from "./types";
import { IconButton } from "@components/IconButton";
import { CopyButton } from "@components/CopyButton";
import EyeIcon from "public/static/svg/eye.svg";
import CodeIcon from "public/static/svg/code.svg";
import SunIcon from "public/static/svg/sun.svg";

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
      <CopyButton code={emailCodes[codeType]} />
      <IconButton>
        <SunIcon />
      </IconButton>
    </div>
  </div>
);
