import * as React from "react";

import DeactivedAccount from "./auth_deactivated-account.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type DeactivedAccountEmailProps = {
  preview: string;
  firstName: string;
  reason: string;
  reactivationLink: string;
};

export default function Email({
  preview = "Suspicious Activity Detected",
  firstName = "Jacob",
  reason = "Breach of Terms & Conditions",
  reactivationLink = "https://company.com/reactivation",
}: DeactivedAccountEmailProps) {
  return (
    <DeactivedAccount
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      reason={reason}
      reactivationLink={reactivationLink}
    />
  );
}
