import * as React from "react";
import { styles, type ThemeStyles } from "@mailingui/themes"

// ⚠️ Proceed with caution

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");

export const remToPx = (rem: number) => `${round(rem * 16)}px`;

export const cx = (
  inputStyles: (
    | keyof ThemeStyles
    | React.CSSProperties
    | undefined
    | boolean
  )[],
  config: { styles: ThemeStyles } = { styles }
): React.CSSProperties =>
  inputStyles
    .filter((s): s is keyof ThemeStyles | React.CSSProperties => Boolean(s))
    .reduce<React.CSSProperties>((mergedStyles, style) => {
      if (typeof style === "string") {
        return { ...mergedStyles, ...config.styles[style] };
      }
      return { ...mergedStyles, ...style };
    }, {});
