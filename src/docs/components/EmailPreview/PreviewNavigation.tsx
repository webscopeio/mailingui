"use client";
import { PreviewSend } from "./PreviewSend";
import { CTA } from "@components/CTA";
import { BackIcon } from "@components/Icons";

const PreviewNavigation = ({
  id,
  html,
  children,
}: {
  id?: string;
  html?: string;
  children?: React.ReactNode;
}) => {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 p-3 lg:flex-nowrap">
      <div className="grid w-full grid-cols-[100px_1fr_100px] items-center justify-between sm:grid-cols-[160px_1fr_160px] lg:flex lg:w-fit lg:gap-8">
        <CTA
          href="/"
          color="black"
          className="flex items-center gap-2 place-self-start p-0"
        >
          <BackIcon />
          <span className="hidden sm:block">Back Home</span>
        </CTA>
        {id && <h2 className="text-center font-semibold">{id}.tsx</h2>}
      </div>
      <div className="grid w-full grid-cols-2 items-center self-end lg:flex lg:w-fit lg:gap-8">
        <div>{children}</div>
        <div className="justify-self-end">
          <PreviewSend html={html} />
        </div>
      </div>
    </nav>
  );
};

export { PreviewNavigation };
