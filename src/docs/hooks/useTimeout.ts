import { useRef, useCallback } from "react";

/**
 * Execute a function after a specified delay
 * using `window.setTimeout()` and `window.clearTimeout()`
 * ref: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 * @param callback - Function executed after specified delay
 * @param delay - The time, in milliseconds before executing the function
 * @returns Methods to `call` and `cancel` the timeout
 */
export const useTimeout = (callback: ()=>void, delay: number) => {
	const callbackRef = useRef<typeof callback | null>(null);
	const timeoutIdRef = useRef<number | null>(null);

	if (!callbackRef.current) {
		callbackRef.current = callback;
	}

	const call = useCallback(() => {
		if (!timeoutIdRef.current) {
			timeoutIdRef.current = window.setTimeout(() => {
				callbackRef.current && callbackRef.current();
				timeoutIdRef.current = null;
			}, delay);
		}
	}, [delay]);

	const cancel = useCallback(() => {
		if (timeoutIdRef.current) {
			window.clearTimeout(timeoutIdRef.current);
			timeoutIdRef.current = null;
		}
	}, []);

	return { call, cancel };
};
