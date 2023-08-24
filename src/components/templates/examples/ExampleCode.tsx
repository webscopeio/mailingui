import { Code, Pre } from "nextra/components";
import * as React from "react";

export const ExampleCode = ({ code, lang }: { code: string; lang: string }) => {
  const html = code
    // Remove out HTML components we replace with nextra components
    .replaceAll("</code>", "")
    .replaceAll("<code>", "")
    .replace(/<pre [^>]*>/gi, "")
    .replace("</pre>", "")
    // For some reasons, when doing this empty lines are lost
    .replaceAll('<span class="line"></span>', '<span class="line">\n</span>');
  return (
    <Pre data-theme="default" data-language={lang} hasCopyCode>
      <Code
        data-theme="default"
        data-language={lang}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Pre>
  );
};
