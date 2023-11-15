import * as React from "react";

import UnreadMessage from "./users_unread-message.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type UnreadMessageEmailProps = {
  preview: string;
  firstName: string;
  count: number;
  messageUrl: string;
};

export default function Email({
  firstName = "Jacob",
  preview = "Welcome to Minimal",
  count = 2,
  messageUrl = "https://company.com/messages",
}: UnreadMessageEmailProps) {
  return (
    <UnreadMessage
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      count={count}
      messageUrl={messageUrl}
    />
  );
}
