import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Text } from "@mailingui/components";

const StandardParagraph = () => {
  return (
    <Html>
      <Head />
      <Preview>Standard Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text variant="brand" size="lg">
            We&apos;d like to inform you that from now on you are subscribed to
            our newsletter.
          </Text>
          <Text variant="default">
            We hope you will enjoy our content. If you have any questions,
            please contant us on our website. To keep your account secure,
            please don&apos;t forward this email to anyone. See our Help Center
            for more security tips.
          </Text>
          <Text variant="subtle">408 Warren Rd - San Mateo, CA 94402</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default StandardParagraph;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "25px 0",
  maxWidth: 580,
};
