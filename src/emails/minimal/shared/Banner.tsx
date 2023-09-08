import * as React from "react";
import { Column, Row } from "@react-email/components";
import { row } from "./styles";

export const Banner: React.FC<
  React.ComponentPropsWithoutRef<"table"> & {
    backgroundColor?: React.CSSProperties["backgroundColor"];
  }
> = ({ backgroundColor = "#f5f5f5", children, style }) => {
  return (
    <Row style={style}>
      <Column
        style={{
          ...row,
          width: "100%",
          paddingTop: "36px",
          paddingBottom: "36px",
          backgroundColor,
        }}
      >
        {children}
      </Column>
    </Row>
  );
};
