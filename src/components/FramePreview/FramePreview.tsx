"use client";
import { ComponentPropsWithoutRef } from "react";
import { Resizable } from "re-resizable";
import { clsx } from "@utils";

export type FramePreviewProps = ComponentPropsWithoutRef<"iframe"> & {
  html: string;
  resizingEnabled?: boolean;
};

/**
 * To avoid possible horizontal scrollbar on smaller devices,
 * `overflow-x` property with value `hidden` should be used
 * in one of the predecessor elements.
 */
export const FramePreview = ({
  title,
  html,
  className,
  resizingEnabled = true,
  ...otherProps
}: FramePreviewProps) => {
  return (
    <Resizable
      bounds="parent"
      /** `mjml` playground's breakpoint is 320px. */
      minWidth="320px"
      enable={resizingEnabled ? { right: true } : {}}
      handleStyles={{
        /** We have to rewrite default styles as the `Resizable` component doesn't allow us to remove them completely. */
        right: {
          right: "initial",
          left: "100%",
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
          width: "auto",
          cursor: "ew-resize",
        },
      }}
      handleClasses={{
        right: "hidden sm:flex items-center",
      }}
      handleComponent={{
        right: <div className="h-8 w-1.5 rounded-full bg-slate-400" />,
      }}
    >
      <iframe
        id={title}
        title={title}
        srcDoc={html}
        className={clsx("text-clip transition-[max-width]", className)}
        {...otherProps}
      />
    </Resizable>
  );
};
