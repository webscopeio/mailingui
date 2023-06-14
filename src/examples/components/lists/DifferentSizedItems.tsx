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
            <List.Item title="Nullam interdum enim in porta" size="xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </List.Item>
            <List.Item title="Donec eget eros nec nunc ultricies" size="sm">
              Praesent fermentum dolor hendrerit enim rhoncus, vitae vulputate
              quam bibendum. Donec ac pulvinar tellus.
            </List.Item>
            <List.Item title="Aenean odio" size="md">
              Sed feugiat nibh a ligula euismod vehicula.
            </List.Item>
            <List.Item title="Cras feugiat" size="lg">
              Cras vestibulum massa et erat maximus vulputate.
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
  padding: "12px 0",
  maxWidth: 580,
};
