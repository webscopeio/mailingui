import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { List } from "@mailingui/components";

export default function CenteredVerticalList() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <List.Root centered>
            <List.Item title="Nullam interdum enim in porta">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget efficitur velit, non suscipit ipsum.
            </List.Item>
            <List.Item title="Donec eget eros nec nunc ultricies">
              Praesent fermentum dolor hendrerit enim rhoncus, vitae vulputate
              quam bibendum. Donec ac pulvinar tellus. Aliquam semper eros vel
              justo vehicula luctus. Donec vel ex leo.
            </List.Item>
            <List.Item title="Cras non feugiat risus">
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
  padding: "15px 0",
  maxWidth: 580,
};
