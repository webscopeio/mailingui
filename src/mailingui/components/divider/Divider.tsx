import React, { CSSProperties, FC, ReactNode } from "react";
import { Hr, Section, Row, Column } from "@react-email/components";

interface DividerProps {
  style?: CSSProperties;
  children?: ReactNode;
}

const Divider: FC<DividerProps> = ({ style: styleProp, children }) => {
  if (children) {
    return (
      <Section style={{ ...sectionsBorders, ...styleProp }}>
        <Row>
          <Column style={sectionBorder}>
            <hr style={{ border: "none", borderBottom: "1px solid #CBD5E1" }} />
          </Column>
          <Column style={sectionCenter}>{children}</Column>
          <Column style={sectionBorder}>
            <hr style={{ border: "none", borderBottom: "1px solid #CBD5E1" }} />
          </Column>
        </Row>
      </Section>
    );
  }

  return (
    <Hr
      style={{
        borderTop: "1px solid #CBD5E1",
        margin: "20px",
        width: undefined,
        ...styleProp,
      }}
    />
  );
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  width: "249px",
};

const sectionCenter: CSSProperties = {
  width: "102px",
  textAlign: "center",
  fontSize: "14px",
  color: "#64748B",
};

export { Divider };
