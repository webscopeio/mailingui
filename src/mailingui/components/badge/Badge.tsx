import * as React from "react";

import { Theme } from "@mailingui/themes";
import { cx } from "@mailingui/utils";

export const Badge: React.FC<
  React.ComponentPropsWithoutRef<"span"> & {
    secondary?: boolean;
    rounded?: boolean;
    compact?: boolean;
    theme?: Theme;
  }
> = ({ secondary, rounded, compact, style, children, theme, ...props }) => {
  return (
    <span
      style={cx(
        [
          "global",
          "text",
          "small",
          secondary ? "secondary" : "primary",
          compact && "compact",
          {
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: "6px",
          },
          rounded && "rounded",
          style,
        ],
        { theme }
      )}
      {...props}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: `<!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%;mso-text-raise:3" hidden>&nbsp;</i><![endif]-->`,
        }}
      />
      {children}
      <span
        dangerouslySetInnerHTML={{
          __html: `<!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`,
        }}
      />
    </span>
  );
};
