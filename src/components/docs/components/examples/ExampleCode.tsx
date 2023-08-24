import * as React from "react";
import { Code, Pre } from "nextra/components";
import { transformHtmlCode } from "@utils/shiki";

export const ExampleCode = ({ code }: { code: string }) => {
  return (
    <Pre data-theme="default" data-language="tsx" hasCopyCode>
      <Code
        data-theme="default"
        data-language="tsx"
        dangerouslySetInnerHTML={{ __html: transformHtmlCode(code) }}
      />
    </Pre>
  );
};
