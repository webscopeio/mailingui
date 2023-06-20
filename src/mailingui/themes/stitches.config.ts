import { createStitches } from "@stitches/react";

/**
 * This instance of Stitches is for managing token themes
 */
const {
  config: { theme },
} = createStitches({
  theme: {
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
    rounded: {
      md: "4px",
      full: "9999px",
    },
  },
} as const); // We define it as const so values can be read only

/**
 * This instance of Stitches is for styling components and injecting styles into emails
 */
const { css, getCssText: stitchesGetCssText } = createStitches();

const MEDIA_REGEX = /@media\s*{([\s\S]+?})\s*}/;
const REGEX_FLAG = "g";

/**
 * Process the generated CSS and extract all media blocks to return regular CSS
 */
const extractCssText = (input: string): string => {
  const matches = input.match(new RegExp(MEDIA_REGEX, REGEX_FLAG));
  if (matches) {
    return matches.map((m) => m.match(MEDIA_REGEX)?.[1]).join("\n");
  }
  return "";
};

/**
 * This is a wrapper around Stitches `getCssText` it is necessary to remove
 * CSS declarations that aren't supported by email clients
 */
const getCssText = () => extractCssText(stitchesGetCssText());

export { css, getCssText, theme };
