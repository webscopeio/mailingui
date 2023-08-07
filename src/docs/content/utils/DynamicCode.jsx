"use client";

// used an JSX to not have to care about types
import { useRef, useEffect } from "react";

export function DynamicCode({ replaceBy, children }) {
  const ref = useRef();
  // Find the corresponding token from the DOM
  useEffect(() => {
    if (ref.current) {
      const token = [...ref.current.querySelectorAll("code span")].find(
        (el) => el.innerText === " [options] installName"
      );
      if (token) token.innerText = ` [options] ${replaceBy}`;
    }
  }, [replaceBy]);
  return <div ref={ref}>{children}</div>;
}
