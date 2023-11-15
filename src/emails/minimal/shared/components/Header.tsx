import * as React from "react";
import { Column, Row } from "@react-email/components";

import { baseUrl } from "../assets";
import { row } from "../styles";
import { colors, theme } from "../theme";

import * as components from "@mailingui/components";
import { applyTheme } from "@mailingui/utils";

const { Img, H1, HR } = applyTheme(components, theme);

export const Header = ({ headerHeading }: { headerHeading?: string }) => {
  return (
    <>
      <Row
        style={{
          ...row,
          padding: "40px 20px 0px 40px ",
          backgroundColor: headerHeading ? colors.primary : "#FFFFFF",
        }}
      >
        <Column width={103} height={35}>
          <Img
            compact
            width={150}
            height={30}
            src={
              headerHeading
                ? `${baseUrl}/logo-white.png`
                : `${baseUrl}/logo.png`
            }
            alt="Minimal Logo"
          />
          {headerHeading && (
            <H1 style={{ color: "#FFFFFF", paddingTop: "32px", margin: 0 }}>
              {headerHeading}
            </H1>
          )}
        </Column>
      </Row>
      <Row style={row}>
        <Column>
          <HR />
        </Column>
      </Row>
    </>
  );
};
