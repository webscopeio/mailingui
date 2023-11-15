import * as React from "react";

import TeamRequest from "./users_team-request.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type TeamRequestEmailProps = {
  preview: string;
  firstName: string;
  team: string;
  user: string;
  userImage: string;
  userImageAlt: string;
  dashboardUrl: string;
};

export default function Email({
  firstName = "Jacob",
  team = "Webscope",
  user = "Jacob",
  userImage = "https://react-email-demo-ijnnx5hul-resend.vercel.app/static/vercel-team.png",
  userImageAlt = "webscope logo",
  dashboardUrl = "https://company.com/team/manage-users",
  preview = `${user} has requested access to team ${team}`,
}: TeamRequestEmailProps) {
  return (
    <TeamRequest
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      team={team}
      user={user}
      userImage={userImage}
      userImageAlt={userImageAlt}
      dashboardUrl={dashboardUrl}
    />
  );
}
