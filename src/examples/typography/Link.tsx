import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { P, Link } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <P>
            The king thought long and hard, and finally came up with a{" "}
            <Link href="#">brilliant plan</Link>: he would tax the jokes in the
            kingdom.
          </P>
          <P>
          <Link block href="#">More brilliant plans →</Link>
          <Link block href="#">Terrible brilliant plans →</Link>
          <Link block href="#">Not so terrible brilliant plans →</Link>
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
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "110px 0",
  maxWidth: 580,
};
