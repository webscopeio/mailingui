import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { Text } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum dolor quis aliquet posuere. Donec purus felis, faucibus
            quis congue venenatis, volutpat vitae enim.
          </Text>
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
