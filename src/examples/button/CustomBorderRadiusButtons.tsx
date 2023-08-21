import * as React from "react";
import { Head, Body, Container, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

const CustomBorderRadiusButtons = () => (
  <Html>
    <Head />
    <Preview>Custom Border Radius Buttons</Preview>
    <Body style={main}>
      <Container style={container}>
        <Button href="#clicked!" size="xs" style={{ borderRadius: 10 }}>
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button href="#clicked!" size="sm" style={{ borderRadius: 12 }}>
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button href="#clicked!" size="md" style={{ borderRadius: 12 }}>
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button href="#clicked!" size="lg" style={{ borderRadius: 14 }}>
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button href="#clicked!" size="xl" style={{ borderRadius: 14 }}>
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button href="#clicked!" size="2xl" style={{ borderRadius: 16 }}>
          Button
        </Button>
      </Container>
    </Body>
  </Html>
);

export default CustomBorderRadiusButtons;

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
