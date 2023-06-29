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
    <nav className="flex flex-wrap items-center justify-between gap-2 p-3 md:flex-nowrap">
      <div className="flex w-full items-center justify-between md:w-fit md:gap-8">
        <CTA href="/" color="black" className="flex items-center gap-2 p-0">
          <BackIcon />
          <span className="hidden lg:block">Back Home</span>
        </CTA>
        {id && <h2 className="font-semibold">{id}.tsx</h2>}
        <div className="w-4 md:hidden">{/*Nav button placeholder*/}</div>
      </div>
      <div className="flex w-full items-center justify-between gap-4 self-end md:w-fit">
        {children}
        <PreviewSend html={html} />
      </div>
    </nav>
  );
};

export { PreviewNavigation };
