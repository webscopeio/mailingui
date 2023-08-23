import { DownloadIcon } from "lucide-react";
import { CTA } from "@components/ui/CTA";

export const Header = ({
  tag,
  github,
  title,
  description,
  downloadHref,
}: {
  tag: string;
  github: string;
  title: string;
  description: string;
  downloadHref: string;
}) => {
  return (
    <header className="space-y-4 border-b border-white/10 pb-10">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2 text-sm text-gray-400">
          <span>{tag}</span>
          <span>·</span>
          <div className="space-x-1">
            <span>created by</span>
            <a
              target="_blank"
              href={`https://github.com/${
                github === "MailingUI" ? "webscopeio/mailingui" : github
              }`}
            >
              <span className="brand-gradient bg-clip-text font-semibold text-transparent">
                @{github}
              </span>
            </a>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-100">
          {title}
        </h1>
        <p className="text-gray-400">{description}</p>
      </div>
      <CTA href={downloadHref}>
        <DownloadIcon />
        Download all
      </CTA>
    </header>
  );
};
