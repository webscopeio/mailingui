import React, { FC, ReactNode } from "react";
import { Heading as ReactEmailHeading } from "@react-email/components";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ as = "h1", children }) => {
  return (
    <ReactEmailHeading as={as} style={heading}>
      {children}
    </ReactEmailHeading>
  );
};

const heading = {
  color: "white",
  fontSize: 20,
};

export default Heading;
