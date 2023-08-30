import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { Blockquote } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Blockquote>
            &quot;After all&quot; he said, &quot;everyone enjoys a good joke, so
            it&apos;s only fair that they should pay for the privilege.&quot;
          </Blockquote>
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
