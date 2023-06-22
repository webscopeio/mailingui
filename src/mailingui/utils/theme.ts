import { createStitches } from "@stitches/react";

/**
 * This file is providing utilities for using themes in emails. As a theme, we can use a plain object.
 */

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

export { css, getCssText };
