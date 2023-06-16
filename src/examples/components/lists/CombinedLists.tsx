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
              <ListItemTitle>
                Advanced syntax highlighting solution
              </ListItemTitle>
              <ListItemContent>
                Performant and reliable build-time syntax highlighting powered
                by Shiki(opens in a new tab).
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle>I18n as easy as creating new files</ListItemTitle>
              <ListItemContent>
                Name your page files with locales suffixed, Nextra and Next.js
                will do the rest for you.
              </ListItemContent>
            </ListItem>
          </ListRoot>
          <ListRoot style={{ paddingTop: "8px" }}>
            <ListItem>
              <ListItemTitle>
                Full-text search, zero-config needed
              </ListItemTitle>
              <ListItemContent>
                Nextra indexes your content automatically at build-time and
                performs incredibly fast full-text search via FlexSearch(opens
                in a new tab).
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
  padding: "30px 0",
  maxWidth: 580,
};
