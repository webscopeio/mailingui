import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import {
  ListRoot,
  ListItem,
  ListItemTitle,
  ListItemContent,
} from "@mailingui/components";

export default function VerticalList() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <ListRoot>
            <ListItem size="xs">
              <ListItemTitle>Nullam interdum enim in porta</ListItemTitle>
              <ListItemContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItemContent>
            </ListItem>
            <ListItem size="sm">
              <ListItemTitle>Donec eget eros nec nunc ultricies</ListItemTitle>
              <ListItemContent>
                Praesent fermentum dolor hendrerit enim rhoncus, vitae vulputate
                quam bibendum. Donec ac pulvinar tellus.
              </ListItemContent>
            </ListItem>
            <ListItem size="md">
              <ListItemTitle>Aenean odio</ListItemTitle>
              <ListItemContent>
                Sed feugiat nibh a ligula euismod vehicula.
              </ListItemContent>
            </ListItem>
            <ListItem size="lg">
              <ListItemTitle>Cras feugiat</ListItemTitle>
              <ListItemContent>
                Cras vestibulum massa et erat maximus vulputate.
              </ListItemContent>
            </ListItem>
          </ListRoot>
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
