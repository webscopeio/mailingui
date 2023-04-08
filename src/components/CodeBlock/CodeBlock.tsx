"use client";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-light";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export type CodeBlockProps = {
  children: string | string[];
  language?: string | undefined;
  customStyle?: { [key: string]: React.CSSProperties } | undefined;
};

export const CodeBlock = ({
  children,
  language,
  customStyle,
}: CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        margin: "0",
        padding: "1.2rem",
        ...customStyle,
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
