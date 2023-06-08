import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

const BorderedButtons = () => (
  <Html>
    <Head />
    <Preview>Bordered Buttons</Preview>
    <Body style={main}>
      <Container style={container}>
        <Button
          href="#clicked!"
          backgroundColor="white"
          color="black"
          borderColor="#ced4da"
          size="xs"
        >
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button
          href="#clicked!"
          backgroundColor="white"
          color="black"
          borderColor="#ced4da"
          size="sm"
        >
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button
          href="#clicked!"
          backgroundColor="white"
          color="black"
          borderColor="#ced4da"
          size="md"
        >
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button
          href="#clicked!"
          backgroundColor="white"
          color="black"
          borderColor="#ced4da"
          size="lg"
        >
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button
          href="#clicked!"
          backgroundColor="white"
          color="black"
          borderColor="#ced4da"
          size="xl"
        >
          Button
        </Button>
        <span style={{ padding: 10 }} />
        <Button
          href="#clicked!"
          backgroundColor="white"
          color="black"
          borderColor="#ced4da"
          size="2xl"
        >
          Button
        </Button>
      </Container>
    </Body>
  </Html>
);

export default BorderedButtons;

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
