import * as React from "react";
import { Text as ReactEmailText } from "@react-email/components";

export interface TextProps {
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <ReactEmailText>{children}</ReactEmailText>;
};

export { Text };
