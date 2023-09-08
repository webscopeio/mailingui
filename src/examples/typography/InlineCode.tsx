import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { H2, P, Code } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <H2>Truly <Code>inline_code</Code></H2>
          <P>
            Some of them were asked to install the package:{" "}
            <Code>npm i @jokester</Code>
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
