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
          <Divider dividerWidth={580} borderColor="#c1121f" textColor="#c1121f">
            Divider
          </Divider>
          <Text>Some text</Text>
          <Divider borderColor="#c1121f" />
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
  padding: "55px 0",
  textAlign: "center" as const,
  width: 580,
};
