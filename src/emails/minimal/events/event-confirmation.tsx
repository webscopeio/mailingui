import * as React from "react";

import { Wrapper } from "../shared/Wrapper";
import { Button } from "../shared/Button";

import EventConfirmation from "./event-confirmation.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "Get Ready! You're in for Minimal!",
  eventGuest = "Jacob",
  eventName = "Minimal",
  eventDate = "August 22, 2023",
  eventTime = "4PM - 9PM",
  eventAddress = "Moravské nám. 1007/14",
}: Record<string, string>) {
  return (
    <Markdown
      components={{
        Button: (props) => <Button {...props} />,
        wrapper: (props) => <Wrapper {...props} />,
      }}
    >
      <EventConfirmation
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
