"use client";

import * as React from "react";
import { CopyButton } from "@components/CopyButton";
import { cn } from "@utils/cn";

export const DocPre = ({ children }: { children: React.ReactNode }) => {
  const [code, setCode] = React.useState("");
  return (
    <div className="flex items-center justify-between overflow-x-auto rounded-xl border border-solid border-dark-700 bg-[#011627] px-5 py-3 text-sm">
      <pre
        ref={(node) => {
          node?.textContent && setCode(node.textContent);
        }}
        className={cn(" border-0 my-0 bg-transparent")}
      >
        {children}
      </pre>
      <div className="hidden self-start md:inline-flex">
        <CopyButton code={code} />
      </div>
    </div>
  );
};
