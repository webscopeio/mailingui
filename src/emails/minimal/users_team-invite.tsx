import * as React from "react";

import TeamInvite from "./users_team-invite.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type TeamInvitationEmailProps = {
  preview: string;
  firstName: string;
  team: string;
  teamImage: string;
  teamImageAlt: string;
  expiration: string;
  joinUrl: string;
};

export default function Email({
  firstName = "Jacob",
  team = "Webscope",
  teamImage = "https://react-email-demo-ijnnx5hul-resend.vercel.app/static/vercel-team.png",
  teamImageAlt = "webscope logo",
  joinUrl = "https://company.com/join-team/asf2Safas8saF",
  preview = `You've been invited to team ${team}`,
  expiration = "2 days",
}: TeamInvitationEmailProps) {
  return (
    <TeamInvite
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      team={team}
      teamImage={teamImage}
      teamImageAlt={teamImageAlt}
      joinUrl={joinUrl}
      expiration={expiration}
    />
  );
}
