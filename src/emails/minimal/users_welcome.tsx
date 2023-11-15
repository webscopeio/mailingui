import * as React from "react";

import Welcome from "./users_welcome.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type WelcomeEmailProps = {
  preview: string;
  firstName: string;
};

export default function Email({
  firstName = "Jacob",
  preview = "Welcome to Minimal",
}: WelcomeEmailProps) {
  return (
    <Welcome
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
    />
  );
}
