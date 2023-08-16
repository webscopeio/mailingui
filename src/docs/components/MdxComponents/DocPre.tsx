"use client";

import * as React from "react";
import { CopyButton } from "@components/CopyButton";
import { cn } from "@utils/cn";

export const DocPre = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const [code, setCode] = React.useState("");
  return (
    <div className="flex items-center justify-between overflow-x-auto rounded-md bg-[#011627] px-5 py-6 text-sm">
      <pre
        ref={(node) => {
          node?.textContent && setCode(node.textContent);
        }}
        className={cn("mdx-code border-0 my-0 pl-7 bg-transparent")}
        {...props}
      >
        {children}
      </pre>
      <div className="-mt-2.5 hidden self-start md:inline-flex">
        <CopyButton code={code} />
      </div>
    </div>
  );
};
