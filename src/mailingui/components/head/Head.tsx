import React, { ComponentPropsWithoutRef, FC } from "react";
import { Head as ReactEmailHead } from "@react-email/components";

type HeadProps = ComponentPropsWithoutRef<"head">;

const Head: FC<HeadProps> = ({ children, ...props }) => {
  return (
    <ReactEmailHead {...props}>
      {children}
    </ReactEmailHead>
  );
};

export { Head };
