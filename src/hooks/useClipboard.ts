import React from "react";

/**
 * Hook for copying text to a user's clipboard. Doesn't support Internet Explorer.
 * @returns Tuple with copy function and copied text.
 */
export const useClipboard = (): [
  (value: string | number) => Promise<boolean>,
  string | undefined
] => {
  const [text, setText] = React.useState<string | undefined>();

  const copy = React.useCallback(
    async (value: string | number): Promise<boolean> => {
      if (!("clipboard" in navigator)) {
        // eslint-disable-next-line no-console
        console.warn("Clipboard not supported.");
        return false;
      }

      const text = value.toString();

      try {
        await navigator.clipboard.writeText(text);
        setText(text);
        return true;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn("Copy to clipboard failed: ", error);
        setText(undefined);
        return false;
      }
    },
    []
  );

  return [copy, text];
};
