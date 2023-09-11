import * as React from "react";

import { baseUrl } from "../shared/assets";
import { Wrapper } from "../shared/Wrapper";

import SubscriptionSuccess from "./subscription-success.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "Welcome to the Minimalist",
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
      <SubscriptionSuccess
        preview={preview}
        newsletterName={newsletterName}
        subscriberName={subscriberName}
      />
    </Markdown>
  );
}
