import * as React from "react";

import TeamRemoved from "./users_team-removed.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type TeamRemovedEmailProps = {
  preview: string;
  firstName: string;
  contactEmail?: string;
  team: string;
  teamImage: string;
  teamImageAlt: string;
};

export default function Email({
  firstName = "Jacob",
  team = "Webscope",
  teamImage = "https://react-email-demo-ijnnx5hul-resend.vercel.app/static/vercel-team.png",
  teamImageAlt = "webscope logo",
  contactEmail = "admin@webscope.io",
  preview = `You have been removed from ${team}`,
}: TeamRemovedEmailProps) {
  return (
    <TeamRemoved
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      team={team}
      teamImage={teamImage}
      teamImageAlt={teamImageAlt}
      contactEmail={contactEmail}
    />
  );
}
