import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Row,
  Column,
  Head,
} from "@react-email/components";
import { Button } from "@mailingui/components";

const DifferentColorButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Different Color Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <Button href="#clicked!" backgroundColor="#003049">
                Button
              </Button>
            </Column>
            <Column width={16} />
            <Column>
              <Button href="#clicked!" backgroundColor="#d62828">
                Button
              </Button>
            </Column>
            <Column width={16} />
            <Column>
              <Button href="#clicked!" backgroundColor="#f77f00">
                Button
              </Button>
            </Column>
            <Column width={16} />
            <Column>
              <Button href="#clicked!" backgroundColor="#fcbf49" color="black">
                Button
              </Button>
            </Column>
            <Column width={16} />
            <Column>
              <Button href="#clicked!" backgroundColor="#f77f00" color="black">
                Button
              </Button>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default DifferentColorButtons;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
  textAlign: "center" as const,
};
