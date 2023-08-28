import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { H2, P, InlineCode } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <H2>Truly <InlineCode>inline_code</InlineCode></H2>
          <P>
            Some of them were asked to install the package:{" "}
            <InlineCode>npm i @jokester</InlineCode>
          </P>
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
  padding: "110px 0",
  maxWidth: 580,
};
