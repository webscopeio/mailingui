"use client";

import React from "react";

export function DynamicCode({
  textContent,
  replaceBy,
  children,
}: {
  textContent: string;
  replaceBy: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll("span[data-line] span");
      elements.forEach((el) => {
        if (el.textContent === textContent) {
          el.textContent = replaceBy;
        }
      });
    }
  }, [replaceBy, textContent]);

  return <div ref={ref}>{children}</div>;
}
