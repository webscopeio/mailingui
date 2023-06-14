import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { List } from "@mailingui/components";

export default function CombinedLists() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <List.Root horizontal>
            <List.Item
              title="Advanced syntax highlighting solution"
              style={{ paddingRight: "32px" }}
            >
              Performant and reliable build-time syntax highlighting powered by
              Shiki(opens in a new tab).
            </List.Item>
            <List.Item title="I18n as easy as creating new files">
              Name your page files with locales suffixed, Nextra and Next.js
              will do the rest for you.
            </List.Item>
          </List.Root>
          <List.Root style={{ paddingTop: "8px" }}>
            <List.Item title="Full-text search, zero-config needed">
              Nextra indexes your content automatically at build-time and
              performs incredibly fast full-text search via FlexSearch(opens in
              a new tab).
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
  padding: "30px 0",
  maxWidth: 580,
};
