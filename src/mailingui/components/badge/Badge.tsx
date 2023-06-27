"use client";

import React, { CSSProperties } from "react";
import { theme } from "@mailingui/themes";

/** Here we consume the tokens we need from our theme */
const {
  color: { background, foreground, brand },
} = theme;

/** Then we create default and prop-specific styles */
const variants = {
  default: {
    backgroundColor: foreground["100"],
    color: background["100"],
    border: "none",
  },
  brand: {
    backgroundColor: brand,
    color: background["100"],
    border: "none",
  },
  subtle: {
    backgroundColor: background["400"],
    color: brand,
    border: "none",
  },
  outline: {
    backgroundColor: background["100"],
    color: foreground["100"],
    border: `1px solid ${foreground["100"]}`,
  },
} as const;

const sizes = {
  sm: {
    padding: "2px 6px",
    fontSize: "12px",
  },
  md: {
    padding: "4px 10px",
    fontSize: "14px",
  },
  lg: {
    padding: "6px 12px",
    fontSize: "16px",
  },
} as const;

type BadgeProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  dot?: boolean;
  pill?: boolean;
  noBorder?: boolean;
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "md",
  pill,
  noBorder,
  dot,
  children,
}) => {
  const style: CSSProperties = {
    ...variants[variant],
    ...sizes[size],
    borderRadius: pill ? "9999px" : "4px",
    ...(noBorder ? { border: "none" } : {}),
  };

  return (
    <span style={style}>
      <span
        dangerouslySetInnerHTML={{
          __html: `<!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%;mso-text-raise:3" hidden>&nbsp;</i><![endif]-->`,
        }}
      />
      {dot ? (
        <>
          <span
            dangerouslySetInnerHTML={{
              __html:
                "<!--[if mso]>\n" +
                `  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:6px;v-text-anchor:middle;width:8px;" arcsize="167%" strokecolor="${variants[variant].color}" fillcolor="${variants[variant].color}">\n` +
                "    <w:anchorlock/>\n" +
                '    <center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;mso-text-raise:2">&nbsp;</center>\n' +
                "  </v:roundrect>\n" +
                "<![endif]-->",
            }}
          />
          <span
            style={{
              display: "inline-block",
              height: "8px",
              width: "8px",
              marginRight: "6px",
              marginBottom: "1px",
              borderRadius: "9999px",
              backgroundColor: variants[variant].color,
            }}
          />
          <span
            dangerouslySetInnerHTML={{
              __html: `<!--[if mso]><i style="letter-spacing: 6px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`,
            }}
          />
        </>
      ) : null}
      {children}
      <span
        dangerouslySetInnerHTML={{
          __html: `<!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`,
        }}
      />
    </span>
  );
};

export { Badge, type BadgeProps };
