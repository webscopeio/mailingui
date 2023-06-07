import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

const PrimaryButtons = () => {
  const primaryColor = "#2563EB";

  return (
    <Html>
      <Head />
      <Preview>Primary Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Button href="#clicked!" backgroundColor={primaryColor} size="xs">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" backgroundColor={primaryColor} size="sm">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" backgroundColor={primaryColor} size="md">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" backgroundColor={primaryColor} size="lg">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" backgroundColor={primaryColor} size="xl">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" backgroundColor={primaryColor} size="2xl">
            Button
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default PrimaryButtons;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
  textAlign: "center" as const,
  maxWidth: 900,
};
