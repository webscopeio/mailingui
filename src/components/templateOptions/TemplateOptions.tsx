import DesktopIcon from "public/static/svg/desktop.svg";
import CodeIcon from "public/static/svg/code.svg";
import MobileIcon from "public/static/svg/mobile.svg";

type Props = {
  active: "desktop" | "mobile" | "code";
  setActive: (active: "desktop" | "mobile" | "code") => void;
};

export default function TemplateOptions({ active, setActive }: Props) {
  return (
    <div className="flex w-80 items-center justify-between rounded-3xl bg-dark-800 p-1">
      <button
        className={`w-1/3 rounded-3xl px-3 py-2 text-sm font-medium ${
          active === "desktop"
            ? "bg-pink-to-purple-gradient text-white"
            : "bg-transparent text-dark-100"
        } `}
        onClick={() => setActive("desktop")}
      >
        <DesktopIcon className="mr-2 inline-block" />
        <span className="align-middle">Desktop</span>
      </button>
      <button
        className={`w-1/3 rounded-3xl px-3 py-2 text-sm font-medium ${
          active === "mobile"
            ? "bg-pink-to-purple-gradient text-white"
            : "bg-transparent text-dark-100"
        } `}
        onClick={() => setActive("mobile")}
      >
        <MobileIcon className="mr-2 inline-block" />
        <span className="align-middle">Mobile</span>
      </button>
      <button
        className={`w-1/3 rounded-3xl px-3 py-2 text-sm font-medium ${
          active === "code"
            ? "bg-pink-to-purple-gradient text-white"
            : "bg-transparent text-dark-100"
        } `}
        onClick={() => setActive("code")}
      >
        <CodeIcon className="mr-2 inline-block" />
        <span className="align-middle">Code</span>
      </button>
    </div>
  );
}
