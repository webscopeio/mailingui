import * as React from "react";
import { Head, Body, Container, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

const PillButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Pill Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Button href="#" variant="brand" rounded="full" size="xs">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#" variant="brand" rounded="full" size="sm">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#" variant="brand" rounded="full" size="md">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#" variant="brand" rounded="full" size="lg">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#" variant="brand" rounded="full" size="xl">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#" variant="brand" rounded="full" size="2xl">
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
  maxWidth: 900,
};
