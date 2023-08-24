import * as React from "react";
import { useData } from "nextra/data";
import { Code, Pre } from "nextra/components";
import { transformHtmlCode } from "@utils/shiki";

export const DemoCode = () => {
  const { demoCode } = useData();
  return (
    <Pre data-theme="default" data-language="tsx" hasCopyCode>
      <Code
        data-theme="default"
        data-language="tsx"
        dangerouslySetInnerHTML={{ __html: transformHtmlCode(demoCode) }}
      />
    </Pre>
  );
};
