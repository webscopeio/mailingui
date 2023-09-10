import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { P } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <P muted>A story about the king and his subjects </P>
          <P>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </P>
          <P>
            <b>Moral of the story: please think before telling jokes</b>
          </P>
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

export const body: React.CSSProperties = {
  backgroundColor: "#fff", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  padding: "60px 30px",
  maxWidth: "600px", // Estalbish the maximum size of the email
};
