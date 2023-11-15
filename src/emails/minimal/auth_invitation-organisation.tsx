import * as React from "react";

import InvitationOrganisation from "./auth_invitation-organisation.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type OrganisationInvitationEmailProps = {
  preview: string;
  firstName: string;
  organisation: string;
  expiration: string;
  invitationUrl: string;
};

export default function Email({
  preview = "You Have Been Invited",
  firstName = "Jacob",
  organisation = "Webscope",
  expiration = "1 day",
  invitationUrl = "https://company.com/subscribe",
}: OrganisationInvitationEmailProps) {
  return (
    <InvitationOrganisation
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      organisation={organisation}
      expiration={expiration}
      invitationUrl={invitationUrl}
    />
  );
}
