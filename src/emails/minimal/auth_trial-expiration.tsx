import * as React from "react";

import TrialExpiration from "./auth_trial-expiration.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type TrialExpirationEmailProps = {
  preview: string;
  firstName: string;
  hasExpired: boolean;
  expirationDate: string;
  subscriptionUrl: string;
};

export default function Email({
  preview = "Trial Expiration",
  hasExpired = false,
  firstName = "Jacob",
  expirationDate = "28th October, 2023 15:24:12EST",
  subscriptionUrl = "https://company.com/subscribe",
}: TrialExpirationEmailProps) {
  return (
    <TrialExpiration
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      hasExpired={hasExpired}
      expirationDate={expirationDate}
      subscriptionUrl={subscriptionUrl}
    />
  );
}
