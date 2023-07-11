import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Text } from "@mailingui/components";

const Demo = () => {
  return (
    <Html>
      <Head />
      <Preview>Standard Paragraph</Preview>
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
};

export default Demo;

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
