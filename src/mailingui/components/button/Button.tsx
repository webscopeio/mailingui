"use client";

import React, { FC, ReactNode, CSSProperties } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
// TODO: ⬇️This is just a temporary solution, create a PR to react.email so we can use their Button component
import { Button as ReactEmailButton } from "./ButtonPrimitive";
import { type Variant } from "@mailingui/themes";

type ButtonProps = {
  href: string;
  children: ReactNode;
  color?: CSSProperties["color"];
  borderColor?: CSSProperties["color"];
  rounded?: number;
  backgroundColor?: CSSProperties["backgroundColor"];
  variant?: Variant;
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
  rounded,
  href,
  color,
  size = "md",
  borderColor,
  children,
  backgroundColor,
  variant = "primary",
  style: styleProp,
  width,
  height,
}) => {
  const { variants, borderRadius } = useTheme();

  const styles: CSSProperties = {
    backgroundColor:
      backgroundColor ?? variants?.[variant]?.backgroundColor ?? "#2563EB",
    color: color ?? variants?.[variant]?.color ?? "#fff",
    borderRadius: rounded ?? borderRadius ?? 8,
    fontSize: sizes[size].fontSize,
    border: borderColor
      ? `1px solid ${borderColor}`
      : variants?.[variant].borderColor
      ? `1px solid ${variants?.[variant]?.borderColor}`
      : "none",
    ...styleProp,
  };

  if (width) {
    return (
      <div>
        <span
          dangerouslySetInnerHTML={{
            __html:
              "<!--[if mso]>\n" +
              `  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:${height}px;v-text-anchor:middle;width:${width}px;" fillcolor="${backgroundColor}">\n` +
              "    <w:anchorlock/>\n" +
              `    <center style="color:${color};font-family:sans-serif;font-size:13px;font-weight:bold;">Reset password</center>\n` +
              "  </v:rect>\n" +
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

const sizes: Record<
  NonNullable<string>,
  { fontSize: number; paddingX: number; paddingY: number }
> = {
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
};

export { Button, type ButtonProps };
