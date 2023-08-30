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
            <ListItem>
              <ListItemTitle size="xs">
                Nullam interdum enim in porta
              </ListItemTitle>
              <ListItemContent size="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle size="sm">
                Donec eget eros nec nunc ultricies
              </ListItemTitle>
              <ListItemContent size="sm">
                Praesent fermentum dolor hendrerit enim rhoncus, vitae vulputate
                quam bibendum. Donec ac pulvinar tellus.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle>Aenean odio</ListItemTitle>
              <ListItemContent>
                Sed feugiat nibh a ligula euismod vehicula.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle size="lg">Cras feugiat</ListItemTitle>
              <ListItemContent size="lg">
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
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "12px 0",
  maxWidth: 580,
};
