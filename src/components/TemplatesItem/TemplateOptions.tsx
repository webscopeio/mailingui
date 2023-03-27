import { CodeIcon, DesktopIcon } from "@components/Icons";
import { MobileIcon } from "@components/Icons/MobileIcon";

type Props = {
  active: "desktop" | "mobile" | "code";
  setActive: (active: "desktop" | "mobile" | "code") => void;
};

export const TemplateOptions = ({ active, setActive }: Props) => (
  <div className="flex w-80 items-center justify-between rounded-3xl bg-dark-800 p-1">
    <button
      className={`inline-flex w-1/3 items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ${
        active === "desktop"
          ? "bg-pink-to-purple-gradient text-white"
          : "bg-transparent text-dark-100"
      } `}
      onClick={() => setActive("desktop")}
    >
      <DesktopIcon />
      <span className="ml-2">Desktop</span>
    </button>
    <button
      className={`inline-flex w-1/3 items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ${
        active === "mobile"
          ? "bg-pink-to-purple-gradient text-white"
          : "bg-transparent text-dark-100"
      } `}
      onClick={() => setActive("mobile")}
    >
      <MobileIcon />
      <span className="ml-2">Mobile</span>
    </button>
    <button
      className={`inline-flex w-1/3 items-center justify-center rounded-3xl px-3 py-2 text-sm font-medium ${
        active === "code"
          ? "bg-pink-to-purple-gradient text-white"
          : "bg-transparent text-dark-100"
      } `}
      onClick={() => setActive("code")}
    >
      <CodeIcon />
      <span className="ml-2">Code</span>
    </button>
  </div>
);
