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
                Are you satisfied?
              </P>
            </Column>
            <Column>
              <IconRow
                compact
                align="right"
                icons={[
                  {
                    href: "#",
                    src: "https://i.ibb.co/mTFWRLS/thumbs-down.png",
                  },
                  {
                    href: "#",
                    src: "https://i.ibb.co/nc5tK5J/thumbs-up.png",
                  },
                ]}
                iconWidth={38}
                iconGap={24}
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
