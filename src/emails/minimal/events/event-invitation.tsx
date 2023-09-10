import * as React from "react";

import { Wrapper } from "../shared/Wrapper";

import EventInvitation from "./event-invitation.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "You're invited to Minimal!",
  eventGuest = "Jacob",
  eventName = "Minimal",
  eventDate = "August 22, 2023",
  eventTime = "4PM - 9PM",
  eventAddress = "Minimal HQ — Moravské nám. 1007/14",
  confirmBy = "August 20, 2023",
}: Record<string, string>) {
  return (
    <Markdown
      components={{
        wrapper: (props) => <Wrapper {...props} />,
      }}
    >
      <EventInvitation
        preview={preview}
        eventGuest={eventGuest}
        eventName={eventName}
        eventDate={eventDate}
        eventTime={eventTime}
        eventAddress={eventAddress}
        confirmBy={confirmBy}
      />
    </Markdown>
  );
}
