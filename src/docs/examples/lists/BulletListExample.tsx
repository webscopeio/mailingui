import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { BulletList, BulletListItem, Text } from "@mailingui/components";

export default function BulletListExample() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text size="lg" style={{ fontWeight: 700 }}>
            Here are a few simple search tips to get you started:
          </Text>
          <BulletList type="unordered">
            <BulletListItem>
              To find a specific phrase, enter it in quotes: &quot;local
              storage&quot;
            </BulletListItem>
            <BulletListItem>
              To search within specific tag(s), enter them in square brackets:
              [javascript]
            </BulletListItem>
            <BulletListItem>
              Combine them to get even more precise results - [javascript]
              &quot;local storage&quot; searches for the phrase &quot;local
              storage&quot; in questions that have the [javascript] tag
            </BulletListItem>
          </BulletList>
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
  padding: "40px 0",
  maxWidth: 580,
};
