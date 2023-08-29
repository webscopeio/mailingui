import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { P } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <P muted compact>
            A story about the king and his subjects{" "}
          </P>
          <P>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </P>
          <P bold>Moral of the story: please think before telling jokes</P>
          <P small muted>
            Enter your email address for more stories like this
          </P>
          <P small muted>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
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
