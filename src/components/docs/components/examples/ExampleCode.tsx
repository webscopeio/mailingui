import * as React from "react";
import { CodeBlock } from "@components/shared/CodeBlock";

export const ExampleCode = ({ code }: { code: string }) => {
  return <CodeBlock code={code} />;
};
