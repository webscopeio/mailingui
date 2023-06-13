import React, { CSSProperties, FC, ReactNode } from "react";
import { Hr, Section, Row, Column } from "@react-email/components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

interface DividerProps {
  style?: CSSProperties;
  borderColor?: CSSProperties["borderColor"];
  textColor?: CSSProperties["color"];
  dividerWidth?: number;
  children?: ReactNode;
}

const Divider: FC<DividerProps> = ({
  style: styleProp,
  borderColor,
  textColor,
  dividerWidth,
  children,
}) => {
  const defaultDividerColor = "#CBD5E1";
  const { variants } = useTheme();

  const sectionBorder = {
    width: `${dividerWidth ? Math.round(dividerWidth * 0.4) : 232}px`,
  };

  const sectionCenter: CSSProperties = {
    width: `${dividerWidth ? Math.round(dividerWidth * 0.2) : 116}px`,
    textAlign: "center",
    fontSize: "14px",
  };

  if (children) {
    return (
      <Section
        style={{
          width: "100%",
          display: "flex",
          ...styleProp,
        }}
      >
        <Row>
          <Column style={sectionBorder}>
            <Hr
              style={{
                border: "none",
                borderTop: `1px solid ${
                  borderColor ??
                  variants?.secondary.borderColor ??
                  defaultDividerColor
                }`,
              }}
            />
          </Column>
          <Column
            style={{
              color: textColor ?? variants?.secondary.color ?? "#64748B",
              ...sectionCenter,
            }}
          >
            {children}
          </Column>
          <Column style={sectionBorder}>
            <Hr
              style={{
                border: "none",
                borderTop: `1px solid ${
                  borderColor ??
                  variants?.secondary.borderColor ??
                  defaultDividerColor
                }`,
              }}
            />
          </Column>
        </Row>
      </Section>
    );
  }

  return (
    <Hr
      style={{
        borderTop: `1px solid ${
          borderColor ?? variants?.secondary.borderColor ?? defaultDividerColor
        }`,
        margin: "20px 0",
        width: dividerWidth ?? "100%",
        ...styleProp,
      }}
    />
  );
};

export { Divider };
