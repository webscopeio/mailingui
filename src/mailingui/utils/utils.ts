import * as React from "react";
import { theme, type Theme } from "@mailingui/themes";

export const cx = (
  inputStyles: (
    | keyof Theme
    | React.CSSProperties
    | undefined
    | boolean
  )[],
  config: {
    theme?: Theme;
  } = { theme }
): React.CSSProperties =>
  inputStyles
    .filter((s): s is keyof Theme | React.CSSProperties => Boolean(s))
    .reduce<React.CSSProperties>((mergedStyles, style) => {
      if (typeof style === "string") {
        return { ...mergedStyles, ...theme[style], ...config.theme?.[style] };
      }
      return { ...mergedStyles, ...style };
    }, {});
