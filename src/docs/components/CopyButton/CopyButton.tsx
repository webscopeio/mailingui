"use client";
import React from "react";
import { CopyIcon, CheckIcon, CrossIcon } from "@components/Icons";
import { useClipboard } from "@hooks";

import { cn } from "@utils/cn";

export const CopyButton = ({ code }: { code: string }) => {
  const clipboard = useClipboard();
  return (
    <button
      onClick={() => clipboard.copy(code)}
      className={cn([
        "rounded-full p-2.5 font-medium text-neutral-400 transition-all duration-300",
        /** Hover styles */
        "hover:bg-slate-800 hover:text-white",
        /** Focus styles */
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-400 focus-visible:ring-offset-2 ring-offset-dark-800",
        /** Disabled styles */
        "disabled:pointer-events-none disabled:opacity-50"
    ])}
    >
      {clipboard.state === "READY" && <CopyIcon className="h-4 w-4" />}
      {clipboard.state === "SUCCESS" && (
        <CheckIcon className="h-4 w-4 text-green-500" />
      )}
      {clipboard.state === "ERROR" && <CrossIcon className="h-4 w-4 text-red-500" />}
    </button>
  );
};
