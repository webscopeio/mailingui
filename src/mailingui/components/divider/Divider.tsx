"use client";

import React, { CSSProperties, FC, ReactNode } from "react";
import { Hr, Section, Row, Column } from "@react-email/components";
import { useTheme } from "../ThemeProvider/ThemeProvider";

type DividerBaseProps = {
  style?: CSSProperties;
  borderColor?: CSSProperties["borderColor"];
  textColor?: CSSProperties["color"];
};

type ConditionalDividerProps =
  | {
      children: ReactNode;
      baseWidth?: number;
    }
  | { children?: never; baseWidth?: never };

type DividerProps = DividerBaseProps & ConditionalDividerProps;

const Divider: FC<DividerProps> = ({
  style: styleProp,
  borderColor,
  textColor,
  baseWidth = 580,
  children,
}) => {
  const defaultDividerColor = "#CBD5E1";
  const { variants } = useTheme();

  const sectionBorder = {
    width: `${Math.round(baseWidth * 0.4)}px`,
  };

  const sectionCenter: CSSProperties = {
    width: `${Math.round(baseWidth * 0.2)}px`,
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
        width: "100%",
        ...styleProp,
      }}
    />
  );
};

export { Divider };
