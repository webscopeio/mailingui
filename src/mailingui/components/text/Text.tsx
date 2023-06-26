"use client";

import * as React from "react";
import { Text as ReactEmailText } from "@react-email/components";
import { theme } from "@mailingui/themes";

const {
  color: { foreground, brand },
} = theme;

const variants = {
  default: {
    color: foreground["100"],
  },
  subtle: {
    color: foreground["200"],
  },
  brand: {
    color: brand,
  },
} as const;

type TextVariant = keyof typeof variants;

const sizes = {
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
} as const;

type RootProps = React.ComponentPropsWithoutRef<"p">;

interface TextProps extends RootProps {
  centered?: boolean;
  variant?: TextVariant;
  size?: keyof typeof sizes;
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  style,
  centered,
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  return (
    <ReactEmailText
      style={{
        textAlign: centered ? "center" : "inherit",
        ...variants[variant],
        ...sizes[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

export { Text, type TextVariant, type TextProps };
