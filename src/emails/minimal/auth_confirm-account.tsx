import * as React from "react";

import ConfirmAccount from "./auth_confirm-account.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type ConfirmAccountEmailProps = {
  preview: string;
  firstName: string;
  confirmationUrl: string;
  expiration: string;
};

export default function Email({
  firstName = "Jacob",
  preview = "Confirm Your Account",
  confirmationUrl = "https://minimal.com/verify",
  expiration = "2 hours",
}: ConfirmAccountEmailProps) {
  return (
    <ConfirmAccount
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      confirmationUrl={confirmationUrl}
      expiration={expiration}
    />
  );
}
