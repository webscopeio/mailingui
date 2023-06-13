import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Divider, Paragraph } from "@mailingui/components";

const CustomColorDivider = () => {
  return (
    <Html>
      <Head />
      <Preview>Custom Color Divider</Preview>
      <Body style={main}>
        <Container style={container}>
          <Divider dividerWidth={580} borderColor="#c1121f" textColor="#c1121f">
            Divider
          </Divider>
          <Paragraph>Some text</Paragraph>
          <Divider borderColor="#c1121f" />
        </Container>
      </Body>
    </Html>
  );
};

export default CustomColorDivider;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "55px 0",
  textAlign: "center" as const,
  width: 580,
};
