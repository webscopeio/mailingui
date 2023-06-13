import * as React from "react";
import { Text as ReactEmailText } from "@react-email/components";

type RootProps = React.ComponentPropsWithoutRef<"p">;

export interface TextProps extends RootProps {
  centered?: boolean;
  children?: React.ReactNode;
}

const Paragraph: React.FC<TextProps> = ({
  style,
  centered,
  children,
  ...props
}) => {
  return (
    <ReactEmailText
      style={{ textAlign: centered ? "center" : undefined, ...style }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

export { Paragraph };
