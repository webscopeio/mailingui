import * as React from "react";
import { Head, Body, Container, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Pill Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Button href="#">Button</Button>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  paddingTop: "50px",
  textAlign: "center" as const,
  maxWidth: 900,
};
