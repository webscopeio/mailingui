import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Text } from "@mailingui/components";

const CustomStyledParagraphs = () => {
  return (
    <Html>
      <Head />
      <Preview>Custom Styled Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text>
            We&apos;ll be here to help you with any step along the way. You can
            find answers to most questions and get in touch with us on our
            support site.
          </Text>
          <Text>— Your Company Team</Text>
          <Text size="sm" style={{ color: "gray" }}>
            You&apos;re receiving this email because of your subscription to
            weekly emails. To unsubscribe, click here.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomStyledParagraphs;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
  maxWidth: 580,
};
