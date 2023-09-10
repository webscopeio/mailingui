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
import { Button } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Hello Demo</Preview>
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column align="center">
            <Button rounded compact style={{ marginRight: "12px" }} href="#">
                Primary
              </Button>
              <Button rounded secondary compact href="#">
                Secondary
              </Button>
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
