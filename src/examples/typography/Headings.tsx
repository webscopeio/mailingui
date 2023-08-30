import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { H1, H2, H3, H4 } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <H1>The Joke Tax Chronicles</H1>
          <H2>The King&apos;s Plan</H2>
          <H3>The Joke Tax</H3>
          <H4>People stopped telling jokes</H4>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "110px 0",
  maxWidth: 580,
};
