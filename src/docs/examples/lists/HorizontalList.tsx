import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import {
  ListRoot,
  ListItem,
  ListItemTitle,
  ListItemContent,
} from "@mailingui/components";

export default function CombinedLists() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <ListRoot horizontal>
            <ListItem style={{ paddingRight: "32px" }}>
              <ListItemTitle>USWNT 2022/23 Stadium Home</ListItemTitle>
              <ListItemContent>
                Women&apos;s Nike Dri-FIT Soccer Jersey
              </ListItemContent>
            </ListItem>
            <ListItem style={{ paddingRight: "32px" }}>
              <ListItemTitle>Brazil 2022/23 Stadium Goalkeeper</ListItemTitle>
              <ListItemContent>
                Men&apos;s Nike Dri-FIT Short-Sleeve Football Shirt
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle>FFF</ListItemTitle>
              <ListItemContent>
                Women&apos;s Nike Pre-Match Football Top
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
  padding: "105px 0",
  maxWidth: 580,
};
