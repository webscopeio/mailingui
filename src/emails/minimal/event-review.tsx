import * as React from "react";

import { Wrapper } from "./shared/Wrapper";

import EventReview from "./event-review.mdx";

import { Markdown, IconRow } from "@mailingui/components";

export default function Email({
  preview = "How was it?",
  eventGuest = "Jacob",
  eventName = "Minimal",
}: Record<string, string>) {
  return (
    <Markdown
      components={{
        wrapper: (props) => <Wrapper {...props} />,
        IconRow: (props) => <IconRow {...props} />,
      }}
    >
      <EventReview
        preview={preview}
        eventGuest={eventGuest}
        eventName={eventName}
      />
    </Markdown>
  );
}
