import * as React from "react";
import * as mailingUIComponents from "@mailingui/components";
import { theme, type Theme } from "@mailingui/themes";

export const cx = (
  inputStyles: (keyof Theme | React.CSSProperties | undefined | boolean)[],
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

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

type MUICompType = typeof mailingUIComponents;

type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

type ApplyThemeType = Partial<MUICompType>;

export function applyTheme<T extends ApplyThemeType>(
  components: T,
  theme: Theme
): Without<T, "getMDXComponents" | "Grid" | "Cell"> {
  let themables = {};

  Object.entries(components).forEach(([key, comp]) => {
    if (typeof comp !== "function") return;

    const Comp = comp as React.ComponentType<{ theme: Theme }>;

    Object.assign(themables, {
      [key]: (props: ComponentProps<typeof comp>) => (
        <Comp {...props} theme={theme} />
      ),
    });
  });

  return themables as T;
}
