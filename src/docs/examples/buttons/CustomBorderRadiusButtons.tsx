import * as React from "react";
import { Body, Container, Html, Preview } from "@react-email/components";
import { Head, Button, ThemeProvider } from "@mailingui/components";
import { defaultTheme } from "@mailingui/themes";

const CustomBorderRadiusButtons = () => (
  <Html>
    <Head />
    <Preview>Custom Border Radius Buttons</Preview>
    <Body style={main}>
      <ThemeProvider theme={defaultTheme}>
        <Container style={container}>
          <Button href="#clicked!" size="xs" rounded={10}>
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" size="sm" rounded={12}>
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" size="md" rounded={12}>
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" size="lg" rounded={14}>
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" size="xl" rounded={14}>
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" size="2xl" rounded={16}>
            Button
          </Button>
        </Container>
      </ThemeProvider>
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
