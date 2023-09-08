import * as React from "react";
import { Code, Pre } from "nextra/components";
import { transformHtmlCode } from "@utils/shiki";

export const Codeblock = ({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) => {
  return (
    <Pre data-theme="default" data-language={lang} hasCopyCode>
      <Code
        data-theme="default"
        data-language={lang}
        dangerouslySetInnerHTML={{ __html: transformHtmlCode(code) }}
      />
    </Pre>
  );
};
