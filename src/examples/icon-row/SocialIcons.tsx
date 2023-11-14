import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
} from "@react-email/components";
import { IconRow, P } from "@mailingui/components";
import { baseUrl } from "src/emails/minimal/shared/assets";

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Hello Demo</Preview>
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column>
              <P compact muted>
                Contact us
              </P>
            </Column>
            <Column>
              <IconRow
                compact
                align="right"
                icons={[
                  {
                    href: "#",
                    src: `${baseUrl}/icons/github.png`,
                  },
                  {
                    href: "#",
                    src: `${baseUrl}/icons/twitter.png`,
                  },
                ]}
                iconWidth={32}
                iconGap={28}
              />
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
}

export const body: React.CSSProperties = {
  backgroundColor: "#fff", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  padding: "60px 30px",
  maxWidth: "600px", // Estalbish the maximum size of the email
};
