import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Button, ThemeProvider } from "@mailingui/components";

const PrimaryButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Primary Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <ThemeProvider theme={{ primaryColor: "#ff006e" }}>
            <Button href="#clicked!" size="xs">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" size="sm">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" size="md">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" size="lg">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" size="xl">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" size="2xl" backgroundColor="#d62828">
              Button
            </Button>
          </ThemeProvider>
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
