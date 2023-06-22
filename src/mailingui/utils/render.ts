import { render as reactEmailRender, type Options } from "@react-email/render";
import juice from "juice";
import React from "react";

/**
 * This function is a wrapper around `react-email` render function.
 * We are using `juice` to inline CSS styles, but also have them duplicated
 * in a style tag, for maximum compatibility in email clients.
 */
export function render(
  component: React.ReactElement,
  options: Options
): string {
  return juice(reactEmailRender(component, options), {
    removeStyleTags: false,
  });
}
