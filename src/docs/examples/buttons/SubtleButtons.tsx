import * as React from "react";
import { Head, Body, Container, Html, Preview } from "@react-email/components";
import { Button, ThemeProvider } from "@mailingui/components";
import { defaultTheme } from "@mailingui/themes";

const SubtleButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Subtle Buttons</Preview>
      <Body style={main}>
        <ThemeProvider theme={defaultTheme}>
          <Container style={container}>
            <Button href="#clicked!" variant="subtle" size="xs">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="subtle" size="sm">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="subtle" size="md">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="subtle" size="lg">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="subtle" size="xl">
              Button
            </Button>
            <span style={{ padding: 10 }} />
            <Button href="#clicked!" variant="subtle" size="2xl">
              Button
            </Button>
          </Container>
        </ThemeProvider>
      </Body>
    </Html>
  );
};

export default SubtleButtons;

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
