"use client";
import React from "react";
import { IconButton } from "@components/IconButton";
import { useClipboard, useTimeout } from "@hooks";
import CheckIcon from "public/static/svg/check.svg";
import CopyIcon from "public/static/svg/copy.svg";

export type CopyButtonProps = {
  code?: string;
  className?: string;
};

export const CopyButton = ({ code = "", className }: CopyButtonProps) => {
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
      onClick={async () => {
        const isCopied = await copy(code);
        setShowCopied(isCopied);
      }}
      className={className}
    >
      {showCopied ? <CheckIcon width={20} /> : <CopyIcon />}
    </IconButton>
  );
};
