import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Button, ThemeProvider } from "@mailingui/components";

const SoftButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Soft Buttons</Preview>
      <Body style={main}>
        <ThemeProvider>
          <Container style={container}>
            <Button href="#clicked!" variant="soft" size="xs">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="soft" size="sm">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="soft" size="md">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="soft" size="lg">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="soft" size="xl">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="soft" size="2xl">
              Button
            </Button>
          </Container>
        </ThemeProvider>
      </Body>
    </Html>
  );
};

export default SoftButtons;

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
