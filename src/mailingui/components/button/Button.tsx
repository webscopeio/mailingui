import * as React from "react";

import { Button as ReactEmailButton } from "@react-email/components";

import { Theme } from "@mailingui/themes";
import { cx } from "@mailingui/utils";

export const Button: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    href: string;
    secondary?: boolean;
    destructive?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
    compact?: boolean;
    theme?: Theme;
  }
> = ({
  href,
  secondary,
  destructive,
  fullWidth,
  rounded,
  compact,
  theme,
  ...props
}) => (
  <ReactEmailButton
    pY={16}
    pX={24}
    href={href}
    style={cx(
      [
        "global",
        "text",
        !secondary && !destructive && "primary",
        secondary && "secondary",
        destructive && "destructive",
        rounded && "rounded",
        compact && "compact",
        fullWidth && {
          width: "100%",
          boxSizing: "border-box",
          textAlign: "center",
        },
        props.style,
      ],
      { theme }
    )}
  >
    {props.children}
  </ReactEmailButton>
);
