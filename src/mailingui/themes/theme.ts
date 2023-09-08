
import type { Colors, Styles } from "./types";
import { remToPx } from "@mailingui/utils";

/**
 * Color variants for MailingUI Components
 * 
 * Not meant to be exported
 */
type ColorVariants = "global" | "muted" | "muted-background";

/**
 * Style variants for MailingUI Components
 * 
 * Not meant to be exported
 */
type StyleVariants =
  | "global"
  | "headings"
  | "text"
  | "muted"
  | "lead"
  | "small"
  | "block"
  | "compact";

/**
 * Themed colors for MailingUI Components
 * 
 * Add any colors with CSS for consistency
 * in your styles object
 * 
 * Not meant to be exported
 * 
 */
const defaultColors: ThemeColors = {
  global: "#262626", //neutral-800
  muted: "#737373", // neutral-500
  "muted-background": "#f5f5f5", //neutral-100
};

export type ThemeColors = Colors<ColorVariants>;
export type ThemeStyles = Styles<StyleVariants>;

/**
 * Themed styles for MailingUI Components
 * 
 * Add any variants with CSS to access their
 * styles using the object's key or
 * as a utility class combined with `cx`
 * 
 */
export const styles: ThemeStyles = {
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
