import React from "react";
import { useTimeout } from "@hooks";

type CopyState = "ready" | "success" | Error;

/**
 * Hook for copying text to a user's clipboard. Doesn't support Internet Explorer.
 * @returns Tuple with copy function and the copy state. The copy state can be one of three values:
 * 1. `"ready"` when the copy function is ready to be used;
 * 2. `"success"` if the copying was successful;
 * 3. `Error` if a problem was encountered during the copying.
 */
export const useClipboard = (
  timeout = 2000
): [(value: string | number) => void, CopyState] => {
  const [copyState, setCopyState] = React.useState<CopyState>("ready");

  useTimeout(
    () => {
      setCopyState("ready");
    },
    copyState !== "ready" ? timeout : null
  );

  const copy = React.useCallback(async (value: string | number) => {
    if (!("clipboard" in navigator)) {
      setCopyState(new Error("Navigation clipboard is not supported"));
    }

    try {
      const text = value.toString();
      await navigator.clipboard.writeText(text);
      setCopyState("success");
    } catch (error) {
      if (error instanceof Error) {
        setCopyState(error);
      }
    }
  }, []);

  return [copy, copyState];
};
