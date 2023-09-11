import type { Colors, Styles } from "./types";

// HELPERS

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");

const remToPx = (rem: number) => `${round(rem * 16)}px`;

// TYPE DEFINITIONS

/**
 * Color variants for MailingUI Components
 *
 * Not meant to be exported
 */
type ColorVariants =
  | "global"
  | "muted"
  | "muted-background"
  | "primary"
  | "primary-foreground"
  | "destructive"
  | "destructive-foreground";

type ThemeColors = Colors<ColorVariants>;

/**
 * Theme variants for MailingUI Components
 *
 * Not meant to be exported
 */
type ThemeVariants =
  | "global"
  | "headings"
  | "text"
  | "muted"
  | "lead"
  | "small"
  | "block"
  | "compact"
  | "primary"
  | "secondary"
  | "destructive"
  | "rounded";

export type Theme = Styles<ThemeVariants>;

// COLORS

/**
 * Themed colors for MailingUI Components
 *
 * Add any colors with CSS for consistency
 * in your styles object
 *
 * Not meant to be exported
 *
 */
const colors: ThemeColors = {
  global: "#262626", //neutral-800
  muted: "#737373", // neutral-500
  "muted-background": "#f5f5f5", //neutral-100
  primary: "#171717", // neutral-900
  "primary-foreground": "#fafafa", // neutral-50
  destructive: "#b91c1c", // red-700
  "destructive-foreground": "#fef2f2", // red-50
};

// THEME

/**
 * Theme for MailingUI Components
 *
 * Add any variants with CSS to access their
 * styles using the object's key or
 * as a utility class combined with `cx`
 *
 */
export const theme: Theme = {
  global: {
    fontFamily: "system-ui, sans-serif",
    color: colors.global,
    marginBottom: `${remToPx(1.75)}`,
  },
  headings: {
    fontFamily: "system-ui, sans-serif",
    color: colors.global,
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
    borderLeft: `${remToPx(0.25)} solid ${colors.muted}`,
  },
  hr: {
    marginTop: `${remToPx(2)}`,
    width: "100%",
    border: "none",
    borderTop: `${remToPx(0.1)} solid ${colors.muted}`,
  },
  code: {
    fontFamily:
      "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
    whiteSpace: "nowrap",
    borderRadius: `${remToPx(0.25)}`,
    padding: `${remToPx(0.125)} ${remToPx(0.25)}`,
    backgroundColor: colors["muted-background"],
    color: colors.muted,
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
  figure: {
    margin: 0,
    width: "100%",
  },
  img: {
    maxWidth: "100%",
    display: "block",
    outline: "none",
    border: "none",
    textDecoration: "none",
  },
  figcaption: {
    marginTop: `${remToPx(0.5)}`,
    textAlign: "center",
  },
  muted: {
    color: colors.muted,
  },
  primary: {
    border: `1px solid ${colors.primary}`,
    backgroundColor: colors.primary,
    color: colors["primary-foreground"],
  },
  secondary: {
    border: `1px solid ${colors.primary}`,
    backgroundColor: "transparent",
  },
  destructive: {
    border: `1px solid ${colors.destructive}`,
    backgroundColor: colors.destructive,
    color: colors["destructive-foreground"],
  },
  lead: {
    color: colors.muted,
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
    marginTop: 0,
    marginBottom: 0,
  },
  rounded: {
    borderRadius: remToPx(1),
  },
};
