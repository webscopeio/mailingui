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
          <List.Root size="xs">
            <List.Item title="Using content you’ve shared publicly">
              For example, to promote a Google app, we might quote a review you
              wrote. Or to promote Google Play, we might show a screenshot of
              the app you offer in the Play Store.
            </List.Item>
            <List.Item title="Developing new technologies and services">
              For Google consistent with these terms
            </List.Item>
            <List.Item title="Operating and improving the services">
              Which means allowing the services to work as designed and creating
              new features and functionalities. This includes using automated
              systems and algorithms to analyze your content
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
  padding: "40px 0",
  maxWidth: 580,
};
