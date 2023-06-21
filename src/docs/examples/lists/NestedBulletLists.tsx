import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import {
  BulletList,
  BulletListItem,
  ListRoot,
  ListItem,
  ListItemTitle,
} from "@mailingui/components";

export default function NestedBulletLists() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <ListRoot>
            <ListItem>
              <ListItemTitle>Nullam interdum enim in porta</ListItemTitle>
              <BulletList type="unordered">
                <BulletListItem>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </BulletListItem>
                <BulletListItem>Donec ac pulvinar tellus.</BulletListItem>
                <BulletListItem>
                  Aliquam semper eros vel justo vehicula luctus.
                </BulletListItem>
              </BulletList>
            </ListItem>
            <ListItem>
              <ListItemTitle>Donec eget eros nec nunc ultricies</ListItemTitle>
              <BulletList type="ordered">
                <BulletListItem>
                  Praesent fermentum dolor hendrerit enim rhoncus, vitae
                  vulputate quam bibendum.
                </BulletListItem>
                <BulletListItem>Donec ac pulvinar tellus.</BulletListItem>
                <BulletListItem>
                  Aliquam semper eros vel justo vehicula luctus. Donec vel ex
                  leo.
                </BulletListItem>
              </BulletList>
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
  padding: "15px 0",
  maxWidth: 580,
};
