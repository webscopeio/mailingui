"use client";

import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react";
import { clsx } from "@utils";

export type FramePreviewProps = ComponentPropsWithoutRef<"iframe"> & {
  html: string;
  darkMode: boolean;
};

export const FramePreview = ({
  title,
  html,
  className,
  darkMode,
  ...otherProps
}: FramePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useLayoutEffect(() => {
    if (iframeRef?.current?.contentWindow) {
      iframeRef.current.style.height =
        iframeRef.current.contentWindow.document.documentElement.getBoundingClientRect()
          .height + "px";
      const html =
        iframeRef.current.contentWindow.document.querySelector("html");
      if (html) {
        html.style.colorScheme = `${darkMode ? "dark" : "light"}`;
      }
    }
  }, [darkMode]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      srcDoc={html}
      className={clsx(" overflow-scroll", className)}
      onLoad={(e) => {
        const iframe = e.target as HTMLIFrameElement;
        if (iframe?.contentWindow) {
          iframe.style.height =
            iframe.contentWindow.document.documentElement.getBoundingClientRect()
              .height + "px";
        }
      }}
      {...otherProps}
    />
  );
};
