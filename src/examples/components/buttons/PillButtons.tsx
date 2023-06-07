import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

const PillButtons = () => {
  const primaryColor = "#C71679";

  return (
    <Html>
      <Head />
      <Preview>Pill Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Button
            href="#clicked!"
            backgroundColor={primaryColor}
            fontSize="12px"
            paddingY={5}
            paddingX={10}
            pill
          >
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" backgroundColor={primaryColor} pill>
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button
            href="#clicked!"
            backgroundColor={primaryColor}
            fontSize="22px"
            pill
          >
            Button
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default PillButtons;

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
