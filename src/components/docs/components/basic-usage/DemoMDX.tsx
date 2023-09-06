import * as React from "react";
import { useData } from "nextra/data";
import { Code, Pre } from "nextra/components";
import { transformHtmlCode } from "@utils/shiki";

export const DemoMDX = () => {
  const { mdx } = useData();
  return (
    <Pre data-theme="default" data-language="mdx" hasCopyCode>
      <Code
        data-theme="default"
        data-language="mdx"
        dangerouslySetInnerHTML={{ __html: transformHtmlCode(mdx) }}
      />
    </Pre>
  );
};
