import * as React from "react";
import { Body, Container, Html, Preview } from "@react-email/components";
import { Head, Button, ThemeProvider } from "@mailingui/components";
import { defaultTheme } from "@mailingui/themes";

const SecondaryButtons = () => (
  <Html>
    <Head />
    <Preview>Secondary Buttons</Preview>
    <Body style={main}>
      <ThemeProvider theme={defaultTheme}>
        <Container style={container}>
          <Button href="#clicked!" size="xs" variant="secondary">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="secondary" size="sm">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="secondary" size="md">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="secondary" size="lg">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="secondary" size="xl">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="secondary" size="2xl">
            Button
          </Button>
        </Container>
      </ThemeProvider>
    </Body>
  </Html>
);

export default SecondaryButtons;

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
