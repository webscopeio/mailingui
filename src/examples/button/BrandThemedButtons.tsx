import * as React from "react";
import { Body, Head, Container, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

const BrandThemedButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Brand Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Button href="#clicked!" variant="brand" size="xs">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="brand" size="sm">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="brand" size="md">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="brand" size="lg">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="brand" size="xl">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="brand" size="2xl">
            Button
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default BrandThemedButtons;

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
