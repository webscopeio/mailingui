import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { List } from "@mailingui/components";

export default function VerticalList() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <List.Root>
            <List.Item
              titleSize="lg"
              title={<em>We will never ask for your password</em>}
            >
              We understand the importance of safeguarding your personal
              details, and that&apos;s why we maintain strict security measures
              to ensure that your sensitive information remains confidential.
              Rest assured, we will never ask for or store sensitive data.
            </List.Item>
            <List.Item
              titleSize="lg"
              title={<em>We will never request access to your accounts</em>}
            >
              We want you to have complete peace of mind when using our
              services.
            </List.Item>
          </List.Root>
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
  padding: "50px 0",
  maxWidth: 580,
};
