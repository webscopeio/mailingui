import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Divider } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Divider Without Text</Preview>
      <Body style={main}>
        <Container style={container}>
          <Divider />
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
  paddingTop: "90px",
  textAlign: "center" as const,
  maxWidth: 580,
};
