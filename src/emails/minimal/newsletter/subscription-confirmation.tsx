import * as React from "react";

import { Wrapper } from "../shared/Wrapper";
import { Button } from "../shared/Button";

import SubscriptionConfirmation from "./subscription-confirmation.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "Confirm your email",
  newsletterName = "The Minimalist",
  subscriberName = "Jacob",
}: Record<string, string>) {
  return (
    <Markdown
      components={{
        Button: (props) => <Button {...props} />,
        wrapper: (props) => <Wrapper {...props} />,
      }}
    >
      <SubscriptionConfirmation
        preview={preview}
        newsletterName={newsletterName}
        subscriberName={subscriberName}
      />
    </Markdown>
  );
}
