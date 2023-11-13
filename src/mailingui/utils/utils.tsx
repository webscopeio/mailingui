import * as React from "react";

import { Row, Column } from "@react-email/components";

import { type MDXComponents } from "mdx/types";

import { Badge } from "../components/badge/Badge";
import { Button } from "../components/button/Button";
import { Typography } from "../components/typography/Typography";

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
  const themables = {};

  Object.entries(components).forEach(([key, comp]) => {
    if (typeof comp !== "function") return;

    const Comp = comp as React.ComponentType<{ theme: Theme }>;

    Object.assign(themables, {
      [key]: (props: ComponentProps<typeof Comp>) => (
        <Comp {...props} theme={theme} />
      ),
    });
  });

  return themables as T;
}

export function getMDXComponents({
  components,
  theme,
  baseUrl,
}: {
  components?: MDXComponents;
  theme: Theme;
  baseUrl?: string;
}): MDXComponents {
  const defaultComponents: MDXComponents = {
    // HTML Mappings
    h1: (props) => <Typography.H1 theme={theme} {...props} />,
    h2: (props) => <Typography.H2 theme={theme} {...props} />,
    h3: (props) => <Typography.H3 theme={theme} {...props} />,
    h4: (props) => <Typography.H4 theme={theme} {...props} />,
    p: (props) => <Typography.P theme={theme} {...props} />,
    blockquote: (props) => <Typography.Blockquote theme={theme} {...props} />,
    hr: (props) => <Typography.HR theme={theme} {...props} />,
    code: (props) => <Typography.Code theme={theme} {...props} />,
    a: (props) => <Typography.Link theme={theme} {...props} />,
    ul: (props) => <Typography.UL theme={theme} {...props} />,
    ol: (props) => <Typography.OL theme={theme} {...props} />,
    li: (props) => <Typography.LI theme={theme} {...props} />,
    img: ({ title, src, ...props }) => (
      <Typography.Img
        theme={theme}
        caption={title}
        src={`${baseUrl ?? ""}${src}`}
        {...props}
      />
    ),
    // React Email Components
    Row: (props) => <Row {...props} />,
    Column: (props) => <Column {...props} />,
    // MailingUI Components
    H1: (props) => <Typography.H1 theme={theme} {...props} />,
    H2: (props) => <Typography.H2 theme={theme} {...props} />,
    H3: (props) => <Typography.H3 theme={theme} {...props} />,
    H4: (props) => <Typography.H4 theme={theme} {...props} />,
    P: (props) => <Typography.P theme={theme} {...props} />,
    Blockquote: (props) => <Typography.Blockquote theme={theme} {...props} />,
    HR: (props) => <Typography.HR theme={theme} {...props} />,
    Code: (props) => <Typography.Code theme={theme} {...props} />,
    Link: (props) => <Typography.Link theme={theme} {...props} />,
    UL: (props) => <Typography.UL theme={theme} {...props} />,
    OL: (props) => <Typography.OL theme={theme} {...props} />,
    LI: (props) => <Typography.LI theme={theme} {...props} />,
    Img: ({ title, src, ...props }) => (
      <Typography.Img
        theme={theme}
        caption={title}
        src={`${baseUrl ?? ""}${src}`}
        {...props}
      />
    ),
    Badge: (props) => <Badge theme={theme} {...props} />,
    Button: (props) => <Button theme={theme} {...props} />,
  };
  return { ...defaultComponents, ...components };
}
