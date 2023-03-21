"use client";
import CopyIcon from "public/static/svg/copy.svg";
import CheckIcon from "public/static/svg/check.svg";
import { useClipboard } from "@/hooks/useClipboard";
import IconButton from "../iconButton/IconButton";

type Props = {
  code?: string;
  className?: string;
};

export default function CopyButton({ code = "", className }: Props) {
  const clipboard = useClipboard();
  return (
    <IconButton onClick={() => clipboard.copy(code)} className={className}>
      {clipboard.copied ? <CheckIcon width={20} /> : <CopyIcon />}
    </IconButton>
  );
}
