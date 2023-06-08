import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Heading } from "@mailingui/components";

const SimpleHero = () => (
  <Html>
    <Head />
    <Preview>Simple Hero</Preview>
    <Body style={main}>
      <Container
        style={{
          borderRadius: "10px 10px 0 0",
          maxWidth: "600px",
          margin: "0 auto",
          padding: 0,
          backgroundColor: "black",
        }}
      >
        <Heading />
      </Container>
    </Body>
  </Html>
);

export default SimpleHero;

const main = {
  backgroundColor: "#fff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
