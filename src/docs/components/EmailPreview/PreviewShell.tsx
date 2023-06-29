import * as React from "react";
import { PreviewList } from "./PreviewList";

export const PreviewShell = ({
  children,
  files,
  paramsId,
}: {
  children: React.ReactNode;
  files: {
    id: string;
    fileName: string;
  }[];
  paramsId?: string;
}) => {
  return (
    <section className="flex h-screen overflow-hidden">
      <aside className="hidden min-w-[300px] overflow-y-scroll p-8 md:block">
        <PreviewList files={files} activeFileId={paramsId}></PreviewList>
      </aside>
      <div className="flex h-full flex-1 flex-col">{children}</div>
    </section>
  );
};
