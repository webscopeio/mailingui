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
    border: "#737373",
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
