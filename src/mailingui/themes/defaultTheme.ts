import { Theme } from "@mailingui/types";

export const defaultTheme: Theme = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  borderRadius: 8,
  variants: {
    primary: {
      backgroundColor: "#2563EB",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#fff",
      color: "#1E293B",
      borderColor: "#CBD5E1",
    },
    subtle: {
      backgroundColor: "#F1F5F9",
      color: "#2563EB",
    },
    default: {
      borderColor: "#ecedef",
      backgroundColor: "#f9fafb",
      color: "#4b5563",
    },
    danger: {
      borderColor: "#fbe0e0",
      backgroundColor: "#fef2f2",
      color: "#b91c1c",
    },
    success: {
      borderColor: "#d1e7dd",
      backgroundColor: "#f0fdf4",
      color: "#059669",
    },
    warning: {
      borderColor: "#f4e7c1",
      backgroundColor: "#fffbeb",
      color: "#b45309",
    },
  },
};
