import * as React from "react";
import { Code, Pre } from "nextra/components";
import { transformHtmlCode } from "@utils/shiki";

export const Codeblock = ({
  code,
  lang = "tsx",
  filename,
}: {
  code: string;
  lang?: string;
  filename?: string;
}) => {
  return (
    <Pre
      filename={filename}
      data-theme="default"
      data-language={lang}
      hasCopyCode
    >
      <Code
        data-theme="default"
        data-language={lang}
        dangerouslySetInnerHTML={{ __html: transformHtmlCode(code) }}
      />
    </Pre>
  );
};
