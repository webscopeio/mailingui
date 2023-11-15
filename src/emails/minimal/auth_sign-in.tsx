import * as React from "react";

import SignIn from "./auth_sign-in.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type ResetPasswordEmailProps = {
  preview: string;
  firstName: string;
  signInUrl: string;
  expiration: string;
};

export default function Email({
  preview = "Sign In Link",
  firstName = "Jacob",
  expiration = "15 minutes",
  signInUrl = "https://company.com/sign-in",
}: ResetPasswordEmailProps) {
  return (
    <SignIn
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      signInUrl={signInUrl}
      expiration={expiration}
    />
  );
}
