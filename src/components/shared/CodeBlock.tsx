/* eslint-disable tailwindcss/no-custom-classname */
import * as React from "react";

import type { ComponentProps, ReactElement } from "react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@utils/cn";

export const CodeBlock = ({ code }: { code: string }) => {
  const preRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div className="relative">
      <div
        ref={preRef}
        className="nextra-code-block relative mt-6 first:mt-0"
        dangerouslySetInnerHTML={{ __html: code }}
      />
      <div className="absolute right-0 top-0 m-[11px] flex gap-1 opacity-0 transition focus-within:opacity-100 [div:hover>&]:opacity-100">
        <CopyToClipboard
          getValue={() =>
            preRef.current?.querySelector("code")?.textContent || ""
          }
        />
      </div>
    </div>
  );
};

const CopyToClipboard = ({
  getValue,
  ...props
}: {
  getValue: () => string;
} & ComponentProps<"button">): ReactElement => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  const handleClick = useCallback<
    NonNullable<ComponentProps<"button">["onClick"]>
  >(async () => {
    setCopied(true);
    if (!navigator?.clipboard) {
      setCopied(false);
    }
    try {
      await navigator.clipboard.writeText(getValue());
    } catch {
      setCopied(false);
    }
  }, [getValue]);

  const IconToUse = isCopied ? CheckIcon : CopyIcon;

  return (
    <Button onClick={handleClick} title="Copy code" tabIndex={0} {...props}>
      <IconToUse className="nextra-copy-icon pointer-events-none h-4 w-4" />
    </Button>
  );
};

const Button = ({
  children,
  className,
  ...props
}: ComponentProps<"button">): ReactElement => {
  return (
    <button
      className={cn(
        "nextra-button transition-all active:opacity-50",
        "border rounded-md p-1.5",
        "nx-bg-primary-300/10 border-white/10 text-gray-400 hover:text-gray-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

function CheckIcon(props: ComponentProps<"svg">): ReactElement {
  return (
    <svg
      viewBox="0 0 20 20"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CopyIcon(props: ComponentProps<"svg">): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      {...props}
    >
      <rect
        x="9"
        y="9"
        width="13"
        height="13"
        rx="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
