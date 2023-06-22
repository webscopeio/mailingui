export const theme = {
  bg: {
    default: "#f9fafb",
    subtle: "#F1F5F9",
    primary: "#2563EB",
    secondary: "#fff",
    success: "#f0fdf4",
    warning: "#fffbeb",
    danger: "#fef2f2",
  },
  text: {
    default: "#4b5563",
    subtle: "#2563EB",
    primary: "#fff",
    secondary: "#1E293B",
    success: "#059669",
    warning: "#b45309",
    danger: "#b91c1c",
  },
  border: {
    default: "none",
    secondary: "1px solid #cbd5e1"
  },
  rounded: {
    md: "4px",
    full: "9999px",
  },
} as const;

export * from "./defaultTheme";
export * from "./types";
