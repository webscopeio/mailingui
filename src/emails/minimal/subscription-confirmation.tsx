import * as React from "react";

import { baseUrl } from "./shared/assets";
import { Wrapper } from "./shared/Wrapper";

import SubscriptionConfirmation from "./subscription-confirmation.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "Confirm your email",
  newsletterName = "The Minimalist",
  subscriberName = "Jacob",
}: Record<string, string>) {
  return (
    <Markdown
      baseUrl={baseUrl}
      components={{
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
