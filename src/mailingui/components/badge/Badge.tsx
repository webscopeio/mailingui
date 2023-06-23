"use client";

import * as React from "react";
import {CSSProperties} from "react";
import { theme } from "@mailingui/themes";

/** First we consume the tokens we need from our theme */
const {
  color: { background, foreground, brand }
} = theme;

/** Then we start creating default and prop-specific styles */
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
  }

  return (
    <span style={style}>
      {dot ? (
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
      ) : null}
      {children}
    </span>
  );
};

export { Badge, type BadgeProps };
