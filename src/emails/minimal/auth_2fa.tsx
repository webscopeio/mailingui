import * as React from "react";

import TwoFA from "./auth_2fa.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type TwoFactorAuthorizationEmailProps = {
  preview: string;
  firstName: string;
  code: string;
  expiration: string;
};

export default function Email({
  firstName = "Jacob",
  code = "2142",
  preview = `Your authorization code: ${code}`,
  expiration = "2 hours",
}: TwoFactorAuthorizationEmailProps) {
  return (
    <TwoFA
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      code={code}
      expiration={expiration}
    />
  );
}
