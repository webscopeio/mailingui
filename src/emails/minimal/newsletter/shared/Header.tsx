import * as React from "react";
import { Column, Row } from "@react-email/components";

import { baseUrl } from "./assets";
import { row } from "./styles";

import { H3, HR, Img } from "@mailingui/components";

export const Header: React.FC = () => {
  return (
    <>
      <Row style={row}>
        <Column width={38} height={34}>
          <Img
            compact
            width={34}
            height={34}
            src={`${baseUrl}/star.png`}
            alt="Minimal Logo"
          />
        </Column>
        <Column>
          <H3 compact>
            MINIMAL
          </H3>
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
