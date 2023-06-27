"use client";

import React, { CSSProperties, FC, ReactNode } from "react";
import { Hr, Section, Row, Column } from "@react-email/components";
import { theme } from "@mailingui/themes";

const {
  color: { foreground, brand },
} = theme;

const variants = {
  default: {
    color: foreground["100"],
  },
  secondary: {
    color: foreground["200"],
  },
  brand: {
    color: brand,
  },
};

type DividerBaseProps = {
  style?: CSSProperties;
  dividerColor?: CSSProperties["borderColor"];
  textColor?: CSSProperties["color"];
  variant?: keyof typeof variants;
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
  dividerColor,
  textColor,
  baseWidth = 580,
  variant = "default",
  children,
}) => {
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
                  dividerColor ?? variants[variant].color
                }`,
              }}
            />
          </Column>
          <Column
            style={{
              color: textColor ?? variants[variant].color,
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
                  dividerColor ?? variants[variant].color
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
        borderTop: `1px solid ${dividerColor ?? variants[variant].color}`,
        margin: "20px 0",
        width: "100%",
        ...styleProp,
      }}
    />
  );
};

export { Divider };
