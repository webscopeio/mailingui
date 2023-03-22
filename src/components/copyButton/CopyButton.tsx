"use client";
import { IconButton } from "@components/IconButton";
import CopyIcon from "public/static/svg/copy.svg";
import CheckIcon from "public/static/svg/check.svg";
import { useClipboard } from "@hooks/useClipboard";

export type CopyButtonProps = {
  code?: string;
  className?: string;
};

export const CopyButton = ({ code = "", className }: CopyButtonProps) => {
  const clipboard = useClipboard();

  return (
    <IconButton onClick={() => clipboard.copy(code)} className={className}>
      {clipboard.copied ? <CheckIcon width={20} /> : <CopyIcon />}
    </IconButton>
  );
};
