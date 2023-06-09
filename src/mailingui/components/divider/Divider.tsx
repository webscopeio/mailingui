import React, { CSSProperties, FC, ReactNode } from "react";
import { Hr, Section, Row, Column } from "@react-email/components";

interface DividerProps {
  style?: CSSProperties;
  children?: ReactNode;
}

const Divider: FC<DividerProps> = ({ style: styleProp, children }) => {
  const style: CSSProperties = {
    borderTop: "1px solid #CBD5E1",
    margin: "20px",
    width: undefined,
    ...styleProp,
  };

  if (children) {
    return (
      <Section style={{ ...sectionsBorders, ...styleProp }}>
        <Row>
          <Column style={sectionBorder}>
            <span
              dangerouslySetInnerHTML={{
                __html: `<!--[if mso]><hr /><![endif]-->`,
              }}
            />
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid rgb(238,238,238)",
                height: 8,
              }}
            />
            <div style={{ width: "100%", height: 8 }} />
          </Column>
          <Column style={sectionCenter}>{children}</Column>
          <Column style={sectionBorder}>
            <span
              dangerouslySetInnerHTML={{
                __html: `<!--[if mso]><hr /><![endif]-->`,
              }}
            />
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid rgb(238,238,238)",
                height: 8,
              }}
            />
            <div style={{ width: "100%", height: 8 }} />
          </Column>
        </Row>
      </Section>
    );
  }

  return <Hr style={style} />;
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
  color: "#A0AEC0",
};

export { Divider };
