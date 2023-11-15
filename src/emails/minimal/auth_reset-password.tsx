import * as React from "react";

import ResetPassword from "./auth_reset-password.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type ResetPasswordEmailProps = {
  preview: string;
  firstName: string;
  resetUrl: string;
};

export default function Email({
  preview = "Reset Your Password",
  firstName = "Jacob",
  resetUrl = "https://company.com/reset",
}: ResetPasswordEmailProps) {
  return (
    <ResetPassword
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      resetUrl={resetUrl}
    />
  );
}
