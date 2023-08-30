import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import {
  ListRoot,
  ListItem,
  ListItemTitle,
  ListItemContent,
} from "@mailingui/components";

export default function CenteredVerticalList() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <ListRoot>
            <ListItem>
              <ListItemTitle centered>
                Nullam interdum enim in porta
              </ListItemTitle>
              <ListItemContent centered>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget efficitur velit, non suscipit ipsum.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle centered>
                Donec eget eros nec nunc ultricies
              </ListItemTitle>
              <ListItemContent centered>
                Praesent fermentum dolor hendrerit enim rhoncus, vitae vulputate
                quam bibendum. Donec ac pulvinar tellus. Aliquam semper eros vel
                justo vehicula luctus. Donec vel ex leo.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle centered>Cras non feugiat risus</ListItemTitle>
              <ListItemContent centered>
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
  padding: "15px 0",
  maxWidth: 580,
};
