"use client";

import * as React from "react";
import { Text as ReactEmailText } from "@react-email/components";
import { CSSProperties } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { type Variant } from "@mailingui/themes";

type RootProps = React.ComponentPropsWithoutRef<"p">;

export interface TextProps extends RootProps {
  centered?: boolean;
  variant?: Variant;
  size?: keyof typeof sizes;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  style,
  centered,
  variant,
  size = "md",
  children,
  ...props
}) => {
  const { fontFamily, variants } = useTheme();

  return (
    <ReactEmailText
      style={{
        textAlign: centered ? "center" : "inherit",
        ...(variant ? { color: variants?.[variant]?.color } : null),
        ...sizes[size],
        fontFamily,
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

const sizes: Record<"xs" | "sm" | "md" | "lg", CSSProperties> = {
  xs: {
    fontSize: 12,
    lineHeight: "16px",
  },
  sm: {
    fontSize: 14,
    lineHeight: "20px",
  },
  md: {
    fontSize: 16,
    lineHeight: "24px",
  },
  lg: {
    fontSize: 18,
    lineHeight: "28px",
  },
};

export { Text };
