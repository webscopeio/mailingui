import { useState } from "react";

export const useClipboard = ({ timeout = 2500 } = {}) => {
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyTimeout, setCopyTimeout] =
    useState<ReturnType<typeof setTimeout>>();

  const handleCopyResult = (value: boolean) => {
    clearTimeout(copyTimeout);
    setCopyTimeout(setTimeout(() => setCopied(false), timeout));
    setCopied(value);
  };

  const copy = (valueToCopy: string) => {
    if ("clipboard" in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch((err) => setError(err));
    } else {
      setError(
        new Error("useClipboard: Navigation Clipboard is not supported")
      );
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
    clearTimeout(copyTimeout);
  };

  return { copy, reset, error, copied };
};
