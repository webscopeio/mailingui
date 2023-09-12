import * as React from "react";

import { baseUrl } from "./shared/assets";
import { Wrapper } from "./shared/Wrapper";

import Newsletter from "./newsletter.mdx";

import { Markdown } from "@mailingui/components";

export default function Email({
  preview = "Turbo goes all-in on the edge",
}: Record<string, string>) {
  return (
    <Markdown
      baseUrl={baseUrl}
      components={{
        wrapper: (props) => <Wrapper {...props} />,
      }}
    >
      <Newsletter preview={preview} />
    </Markdown>
  );
}
