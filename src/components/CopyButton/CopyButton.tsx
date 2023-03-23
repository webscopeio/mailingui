"use client";
import React from "react";
import { IconButton, IconButtonProps } from "@components/IconButton";
import { CopyIcon, CheckIcon } from "@components/Icons";
import { useClipboard, useTimeout } from "@hooks";

export type CopyButtonProps = Omit<IconButtonProps, "children"> & {
  textToCopy: string;
};

export const CopyButton = ({
  onClick,
  textToCopy,
  "aria-label": ariaLabel = "Copy to clipboard",
  ...delegated
}: CopyButtonProps) => {
  const [showCopied, setShowCopied] = React.useState(false);
  const [copy] = useClipboard();

  useTimeout(
    () => {
      setShowCopied(false);
    },
    showCopied ? 2500 : null
  );

  return (
    <IconButton
      {...delegated}
      onClick={async (e) => {
        if (showCopied) {
          return;
        }
        onClick?.(e);
        const copyingSuccessful = await copy(textToCopy);
        setShowCopied(copyingSuccessful);
      }}
      aria-label={ariaLabel}
    >
      {showCopied ? <CheckIcon className="text-green-700" /> : <CopyIcon />}
    </IconButton>
  );
};
