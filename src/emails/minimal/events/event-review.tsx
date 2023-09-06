import * as React from "react";

import { Wrapper } from "../shared/Wrapper";
import { Button } from "../shared/Button";

import EventReview from "./event-review.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "How was it?",
  eventGuest = "Jacob",
  eventName = "Minimal",
}: Record<string, string>) {
  return (
    <Markdown
      components={{
        Button: (props) => <Button {...props} />,
        wrapper: (props) => <Wrapper {...props} />,
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
