"use client";
import React from "react";
import { IconButton, IconButtonProps } from "@components/IconButton";
import { CopyIcon, CheckIcon, CrossIcon } from "@components/Icons";
import { useClipboard } from "@hooks";

export type CopyButtonProps = Omit<IconButtonProps, "children"> & {
  textToCopy: string;
};

export const CopyButton = ({
  onClick,
  textToCopy,
  "aria-label": ariaLabel = "Copy to clipboard",
  ...delegated
}: CopyButtonProps) => {
  const [copy, copyState] = useClipboard();

  return (
    <IconButton
      {...delegated}
      onClick={(event) => {
        onClick?.(event);
        copy(textToCopy);
      }}
      aria-label={ariaLabel}
    >
      {copyState === "ready" ? (
        <CopyIcon />
      ) : copyState === "success" ? (
        <CheckIcon className="text-green-700" />
      ) : (
        <CrossIcon className="text-red-600" />
      )}
    </IconButton>
  );
};
