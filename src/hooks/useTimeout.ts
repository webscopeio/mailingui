import React from "react";

/**
 * Calls given function after specified amount of milliseconds.
 * Automatically resets on delay change.
 * @param callback - Function called after specified delay.
 * @param delay - Amount of milliseconds after which the callback will get called.
 * @returns Timeout ID reference for imperative timeout cancellation.
 */
export const useTimeout = (
  callback: () => void,
  delay: number | null
): React.MutableRefObject<number | undefined> => {
  const timeoutRef = React.useRef<number | undefined>(undefined);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay !== null) {
      timeoutRef.current = window.setTimeout(tick, delay);

      return () => {
        window.clearTimeout(timeoutRef.current);
      };
    }
  }, [delay]);

  return timeoutRef;
};
