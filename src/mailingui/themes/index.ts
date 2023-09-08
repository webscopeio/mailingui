export const theme = {
  color: {
    background: {
      "100": "#ffffff",
      "200": "#ffffff",
      "300": "#ffffff",
      "400": "#ffffff",
    },
    foreground: {
      "100": "#262626",
      "200": "#404040",
      "300": "#525252",
      "400": "#737373",
    },
    muted: {
      background: "#f1f5f9",
      foreground: "#6d6c6c",
    },
    border: "#a3a3a3",
    brand: "#000000",
  },
  typography: {
    baseFontSize: 17,
    typeScale: 1.333,
    typeFlow: 24,
    fontFamily:
      "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
    fontWeight: {
      base: "300",
      medium: "400",
      bold: "400",
    },
  },
  rounded: {
    base: 0,
    full: 9999,
  },
} as const;

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");

const remToPx = (rem: number) => `${round(rem * 16)}px`;

type ColorKey = "global" | "muted" | "muted-background";

const defaultColors: Record<ColorKey, React.CSSProperties["color"]> = {
  global: "#262626", //neutral-800
  muted: "#737373", // neutral-500
  "muted-background": "#f5f5f5", //neutral-100
};

type Variants =
  | "global"
  | "headings"
  | "text"
  | "muted"
  | "lead"
  | "small"
  | "block"
  | "compact";

type StyleKey = keyof JSX.IntrinsicElements | Variants;

type Styles = Partial<Record<StyleKey, React.CSSProperties>>;

const styles: Styles = {
  global: {
    fontFamily: "system-ui, sans-serif",
    color: defaultColors.global,
    marginBottom: `${remToPx(1.75)}`,
  },
  headings: {
    letterSpacing: remToPx(-0.05),
    marginTop: `${remToPx(2.5)}`,
    fontWeight: 300,
  },
  text: {
    fontSize: remToPx(1.125),
    lineHeight: remToPx(2),
    fontWeight: 300,
  },
  h1: {
    fontSize: remToPx(3.75),
    lineHeight: remToPx(3.75),
    letterSpacing: remToPx(-0.05),
    marginTop: 0,
  },
  h2: {
    fontSize: remToPx(3),
    lineHeight: remToPx(3),
  },
  h3: {
    fontSize: remToPx(2.25),
    lineHeight: remToPx(2.5),
  },
  h4: {
    fontSize: remToPx(1.875),
    lineHeight: remToPx(2.25),
  },
  p: {
    marginTop: 0,
  },
  blockquote: {
    fontStyle: "italic",
    fontWeight: 500,
    marginLeft: `${remToPx(0)}`,
    marginRight: `${remToPx(0)}`,
    padding: `0 0 0 ${remToPx(1)}`,
    borderLeft: `${remToPx(0.25)} solid ${defaultColors.muted}`,
  },
  hr: {
    marginTop: `${remToPx(2)}`,
    width: "100%",
    border: "none",
    borderTop: `${remToPx(0.1)} solid ${defaultColors.muted}`,
  },
  code: {
    fontFamily:
      "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
    whiteSpace: "nowrap",
    borderRadius: `${remToPx(0.25)}`,
    padding: `${remToPx(0.125)} ${remToPx(0.25)}`,
    backgroundColor: defaultColors["muted-background"],
    color: defaultColors.muted,
  },
  a: {
    textDecoration: "underline",
    textUnderlineOffset: "6px",
    color: "inherit",
  },
  ul: {
    paddingLeft: `${remToPx(1.625)}`,
  },
  ol: {
    paddingLeft: `${remToPx(1.625)}`,
  },
  li: {
    paddingLeft: `${remToPx(0.375)}`,
    marginBottom: `${remToPx(0.625)}`,
  },
  muted: {
    color: defaultColors.muted,
  },
  lead: {
    color: defaultColors.muted,
    fontSize: remToPx(1.5),
  },
  small: {
    fontSize: remToPx(0.875),
    lineHeight: remToPx(1.5),
  },
  block: {
    display: "block",
    marginBottom: `${remToPx(1)}`,
  },
  compact: {
    margin: 0,
  },
};

const cx = (
  inputStyles: (StyleKey | React.CSSProperties | undefined | boolean)[],
  config: { styles: Styles } = { styles }
): React.CSSProperties =>
  inputStyles
    .filter((s): s is StyleKey | React.CSSProperties => Boolean(s))
    .reduce<React.CSSProperties>((mergedStyles, style) => {
      if (typeof style === "string") {
        return { ...mergedStyles, ...config.styles[style] };
      }
      return { ...mergedStyles, ...style };
    }, {});

export { type Styles, styles, cx };
