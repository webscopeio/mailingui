import * as React from "react";

import { Wrapper } from "../shared/Wrapper";

import EventReminder from "./event-reminder.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "Minimal is almost here!",
  eventGuest = "Jacob",
  eventName = "Minimal",
  eventDate = "August 22, 2023",
  eventTime = "4PM - 9PM",
  eventAddress = "Minimal HQ — Moravské nám. 1007/14",
}: Record<string, string>) {
  return (
    <Markdown
      components={{
        wrapper: (props) => <Wrapper {...props} />,
      }}
    >
      <EventReminder
        preview={preview}
        eventGuest={eventGuest}
        eventName={eventName}
        eventDate={eventDate}
        eventTime={eventTime}
        eventAddress={eventAddress}
      />
    </Markdown>
  );
}
