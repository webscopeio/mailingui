"use client";

import * as React from "react";
import { CopyButton } from "@components/CopyButton";
import { cn } from "@utils/cn";

export const ProsePre = (props: React.HTMLAttributes<HTMLPreElement>) => {
  const [code, setCode] = React.useState("");
  return (
    <div className="not-prose flex items-center justify-between rounded-xl border border-solid border-dark-700 bg-[#011627] px-5 py-3 text-sm">
      <pre
        {...props}
        ref={(node) => {
          node?.textContent && setCode(node.textContent);
        }}
        className={cn(
          props.className,
          "not-prose border-0 my-0 bg-transparent"
        )}
      />
      <div className="hidden self-start md:inline-flex">
        <CopyButton code={code} />
      </div>
    </div>
  );
};
