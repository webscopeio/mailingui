"use client";

import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react";
import { clsx } from "@utils";
import { SupportedViewPorts } from "@components/ComponentExample";

export type FramePreviewProps = ComponentPropsWithoutRef<"iframe"> & {
  html: string;
  darkMode: boolean;
  previewWidth?: SupportedViewPorts;
};

export const FramePreview = ({
  title,
  html,
  className,
  darkMode,
  previewWidth = "100%",
  ...otherProps
}: FramePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useLayoutEffect(() => {
    if (iframeRef?.current?.contentWindow) {
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
      /** This property can be set dynamically if we'd like to show mobile view */
      style={{
        maxWidth: previewWidth,
        colorScheme: darkMode ? "dark" : "light",
      }}
      className={clsx("overflow-scroll transition-[max-width]", className)}
      {...otherProps}
    />
  );
};
