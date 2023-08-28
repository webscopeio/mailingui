export const theme = {
  color: {
    background: {
      "100": "#ffffff",
      "200": "#ffffff",
      "300": "#ffffff",
      "400": "#ffffff",
    },
    foreground: {
      "100": "#000000",
      "200": "#000000",
      "300": "#000000",
      "400": "#000000",
    },
    muted: {
      background: "#f1f5f9",
      foreground: "#6d6c6c",
    },
    brand: "#000000",
  },
  typography: {
    baseFontSize: 17,
    typeScale: 1.333,
    fontWeight: {
      light: "300",
      medium: "400",
      bold: "400",
    },
  },
  rounded: {
    base: 0,
    full: 9999,
  },
} as const;
