import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { Divider, P } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </P>
          <Divider />
          <P>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
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
  paddingTop: "25px",
  textAlign: "center" as const,
  maxWidth: 580,
};
