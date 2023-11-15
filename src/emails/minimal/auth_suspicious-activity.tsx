import * as React from "react";

import SuspiciousActivity from "./auth_suspicious-activity.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type SuspiciousActivityEmailProps = {
  preview: string;
  firstName: string;
  location: string;
  ipAddress: string;
  date: string;
  resetLink: string;
};

export default function Email({
  preview = "Suspicious Activity Detected",
  firstName = "Jacob",
  location = "Moravskoslezký Kraj, Czechia",
  ipAddress = "89.213.123.12",
  date = "28th October, 2023 15:24:12EST",
  resetLink = "https://company.com/reset",
}: Record<string, string>) {
  return (
    <SuspiciousActivity
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      location={location}
      ipAddress={ipAddress}
      date={date}
      resetLink={resetLink}
    />
  );
}
