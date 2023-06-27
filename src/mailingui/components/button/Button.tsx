"use client";

import React, { FC, ReactNode, CSSProperties } from "react";
import { Button as ReactEmailButton } from "@react-email/components";
import { theme } from "@mailingui/themes";

const {
  color: { background, foreground, brand },
  rounded: roundedTheme,
} = theme;

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
    border: foreground["100"],
  },
} as const;

const sizes = {
  xs: {
    fontSize: 14,
    paddingX: 12,
    paddingY: 8,
  },
  sm: {
    fontSize: 14,
    paddingX: 14,
    paddingY: 10,
  },
  md: {
    fontSize: 16,
    paddingX: 16,
    paddingY: 10,
  },
  lg: {
    fontSize: 16,
    paddingX: 20,
    paddingY: 12,
  },
  xl: {
    fontSize: 16,
    paddingX: 24,
    paddingY: 14,
  },
  "2xl": {
    fontSize: 18,
    paddingX: 24,
    paddingY: 16,
  },
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  href: string;
  children: ReactNode;
  color?: CSSProperties["color"];
  borderColor?: CSSProperties["color"];
  rounded?: keyof typeof roundedTheme;
  backgroundColor?: CSSProperties["backgroundColor"];
  style?: CSSProperties;
} & (
  | {
      size?: keyof typeof sizes;
      width?: never;
      height?: never;
    }
  | { width: number; height: number; size?: never }
);

const Button: FC<ButtonProps> = ({
  rounded = "base",
  href,
  color,
  size = "md",
  borderColor,
  children,
  backgroundColor,
  variant = "default",
  style: styleProp,
  width,
  height,
}) => {
  const styles: CSSProperties = {
    ...variants[variant],
    borderRadius: roundedTheme[rounded],
    ...(backgroundColor ? { backgroundColor: backgroundColor } : {}),
    ...(color ? { color: color } : {}),
    fontSize: sizes[size].fontSize,
    ...(borderColor ? { border: borderColor } : {}),
    ...styleProp,
  };

  if (width) {
    const rectString = rounded ? "roundrect" : "rect";
    const arcSize = rounded
      ? `arcsize="${Math.round(roundedTheme[rounded] / height) * 100}%" `
      : " ";

    return (
      <div>
        <span
          dangerouslySetInnerHTML={{
            __html:
              "<!--[if mso]>\n" + // if this is undefined (not passed as prop), we cannot get it from the theme
              `  <v:${rectString} xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" ${arcSize}href="${href}" style="height:${height}px;v-text-anchor:middle;width:${width}px;" fillcolor="${
                backgroundColor ?? variants[variant].backgroundColor
              }">\n` +
              "    <w:anchorlock/>\n" +
              `    <center style="color:${color};font-family:sans-serif;font-size:13px;font-weight:bold;">Reset password</center>\n` +
              `  </v:${rectString}>\n` +
              "<![endif]-->",
          }}
        />
        <a
          href={href}
          style={
            {
              display: "inline-block",
              lineHeight: `${height}px`,
              textAlign: "center",
              width: `${width}px`,
              textDecoration: "none",
              msoHide: "all",
              ...styles,
            } as CSSProperties
          }
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <ReactEmailButton
      pX={sizes[size].paddingX}
      pY={sizes[size].paddingY}
      href={href}
      style={styles}
    >
      {children}
    </ReactEmailButton>
  );
};

export { Button, type ButtonProps };
