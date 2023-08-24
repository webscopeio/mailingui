import * as React from "react";
import { Code, Pre } from "nextra/components";

export const ExampleCode = ({ code }: { code: string }) => {
  const html = code
    // Remove out HTML components we replace with nextra components
    .replaceAll("</code>", "")
    .replaceAll("<code>", "")
    .replace(/<pre [^>]*>/gi, "")
    .replace("</pre>", "")
    // For some reasons, when doing this empty lines are lost
    .replaceAll('<span class="line"></span>', '<span class="line">\n</span>');
  return (
    <Pre data-theme="default" data-language="tsx" hasCopyCode>
      <Code
        data-theme="default"
        data-language="tsx"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Pre>
  );
};
