import { Code, Pre } from "nextra/components";
import * as React from "react";
import { transformHtmlCode } from "@utils/shiki";

export const ExampleCode = ({ code, lang }: { code: string; lang: string }) => {
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
