import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Divider, Text } from "@mailingui/components";

const DividerWithoutText = () => {
  return (
    <Html>
      <Head />
      <Preview>Divider Without Text</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text>Text above</Text>
          <Divider>Divider</Divider>
          <Text>Text below</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default DividerWithoutText;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
  textAlign: "center" as const,
  width: 580,
};
