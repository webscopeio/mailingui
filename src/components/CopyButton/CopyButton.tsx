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
  const [showCheck, setShowCheck] = React.useState(false);
  const [copy] = useClipboard();

  useTimeout(
    () => {
      setShowCheck(false);
    },
    showCheck ? 2500 : null
  );

  return (
    <IconButton
      {...delegated}
      onClick={async (e) => {
        if (showCheck) {
          return;
        }
        onClick?.(e);
        const copyingSuccessful = await copy(textToCopy);
        setShowCheck(copyingSuccessful);
      }}
      aria-label={ariaLabel}
    >
      {showCheck ? <CheckIcon className="text-green-700" /> : <CopyIcon />}
    </IconButton>
  );
};
