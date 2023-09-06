import * as React from "react";
import { Column, Row } from "@react-email/components";
import { row } from "./styles";
import { theme } from "@mailingui/themes";

const { typography } = theme;

export const Banner: React.FC<
  React.ComponentPropsWithoutRef<"table"> & {
    backgroundColor?: React.CSSProperties["backgroundColor"];
  }
> = ({ backgroundColor = "#f5f5f5", children, style }) => {
  return (
    <Row style={{ marginBlockEnd: `${typography.typeFlow}px`, ...style }}>
      <Column
        style={{
          ...row,
          width: "100%",
          paddingTop: "24px",
          paddingBottom: "24px",
          backgroundColor,
        }}
      >
        {children}
      </Column>
    </Row>
  );
};
