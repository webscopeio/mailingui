import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { OL, LI } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <OL>
            <LI>
              Why don&apos;t scientists trust atoms? Because they make up
              everything!
            </LI>
            <LI>
              Parallel lines have so much in common. It&apos;s a shame
              they&apos;ll never meet.
            </LI>
            <LI>How do you organize a space party? You &quot;planet&quot;!</LI>
          </OL>
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
