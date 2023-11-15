import { Theme, ThemeColors, remToPx } from "@mailingui/themes";

export const colors: ThemeColors = {
  global: "#262626", //neutral-800
  muted: "#737373", // neutral-500
  "muted-background": "#f5f5f5", //neutral-100
  primary: "#171717", // neutral-900
  "primary-foreground": "#fafafa", // neutral-50
  destructive: "#b91c1c", // red-700
  "destructive-foreground": "#fef2f2", // red-50
};

// THEME
export const theme: Theme = {
  global: {
    fontFamily: "'Inter', system-ui, sans-serif",
    color: colors.global,
    marginBottom: remToPx(2),
  },
  headings: {
    fontFamily: "'Inter', system-ui, sans-serif",
    color: colors.global,
    marginBottom: remToPx(2),
    fontWeight: 300,
  },
  body: {
    backgroundColor: colors.global, // Background color outside container
    margin: 0, // Margin reset
  },
  h1: {
    fontSize: remToPx(3),
    lineHeight: remToPx(3.25),
  },
  hr: {
    width: "100%",
    border: "none",
    borderTop: `1px solid ${colors.global}`,
    color: colors.global,
    height: "1px",
  },
  text: {
    fontSize: remToPx(1),
    lineHeight: remToPx(1.77),
    fontWeight: 400,
  },
  h2: {
    marginTop: 0,
  },
  blockquote: {
    padding: `0 0 0 ${remToPx(1.5)}`,
  },
  code: {
    backgroundColor: colors["muted-background"],
    color: colors.muted,
  },
  a: {
    margin: 0,
    paddingBottom: remToPx(0.75),
  },
  img: {
    margin: 0,
  },
  figcaption: {
    margin: 0,
    paddingTop: remToPx(0.5),
  },
  muted: {
    color: colors.muted,
  },
  primary: {
    border: "none",
    backgroundColor: colors.primary,
    color: colors["primary-foreground"],
  },
  secondary: {
    border: `1px solid ${colors.primary}`,
  },
  destructive: {
    border: `1px solid ${colors.destructive}`,
    backgroundColor: colors.destructive,
    color: colors["destructive-foreground"],
  },
  lead: {
    color: colors.muted,
  },
  rounded: {
    borderRadius: remToPx(0),
  },
  table: {
    marginBottom: remToPx(1.5),
  },
};
