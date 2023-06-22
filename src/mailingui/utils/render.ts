import { render as reactEmailRender, type Options } from "@react-email/render";
import juice from "juice";
import React from 'react';

export function render (component: React.ReactElement, options: Options): string {
  return juice(reactEmailRender(component, options), { removeStyleTags: false });
}