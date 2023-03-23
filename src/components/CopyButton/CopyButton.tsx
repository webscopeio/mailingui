"use client";
import React from "react";
import { IconButton, IconButtonProps } from "@components/IconButton";
import { useClipboard, useTimeout } from "@hooks";
import CheckIcon from "public/static/svg/check.svg";
import CopyIcon from "public/static/svg/copy.svg";

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
      {showCopied ? <CheckIcon /> : <CopyIcon />}
    </IconButton>
  );
};
