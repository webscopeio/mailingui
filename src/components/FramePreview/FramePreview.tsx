"use client";

import { ComponentPropsWithoutRef, useCallback } from "react";
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
  const callbackRef = useCallback(
    (node: HTMLIFrameElement) => {
      if (node?.contentWindow) {
        const html = node.contentWindow.document.querySelector("html");
        if (html) {
          html.style.colorScheme = `${darkMode ? "dark" : "light"}`;
        }
      }
    },
    [darkMode]
  );

  return (
    <iframe
      ref={callbackRef}
      id={title}
      title={title}
      srcDoc={html}
      style={{
        maxWidth: previewWidth,
      }}
      onLoad={(e) => {
        callbackRef(e.target as HTMLIFrameElement);
      }}
      className={clsx("overflow-scroll transition-[max-width]", className)}
      {...otherProps}
    />
  );
};
