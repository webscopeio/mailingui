import { render as reactEmailRender, type Options } from "@react-email/render";
import React from "react";

/**
 * This function is a wrapper around `react-email` render function.
 */
export function render(
  component: React.ReactElement,
  options: Options
): string {
  return reactEmailRender(component, options);
}
