"use client";

import { PreviewSend } from "./PreviewSend";
import { CTA } from "@components/CTA";
import { BackIcon } from "@components/Icons";

export const PreviewNavigation = ({
  id,
  html,
  children,
}: {
  id?: string;
  html?: string;
  children?: React.ReactNode;
}) => {
  return (
    <nav className="flex items-center justify-between gap-2 p-3">
      <div className="flex items-center gap-1">
        <CTA
          href="/"
          color="black"
          className="flex items-center gap-2 px-4 py-3"
        >
          <BackIcon />
          Back Home
        </CTA>
        {id && <h2 className="font-semibold">{id}.tsx</h2>}
      </div>
      <div className="flex items-center gap-4">
        {children}
        <PreviewSend html={html} />
      </div>
    </nav>
  );
};
