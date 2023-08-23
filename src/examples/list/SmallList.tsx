import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import {
  ListRoot,
  ListItem,
  ListItemContent,
  ListItemTitle,
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
                Using content you’ve shared publicly
              </ListItemTitle>
              <ListItemContent size="xs">
                For example, to promote a Google app, we might quote a review
                you wrote. Or to promote Google Play, we might show a screenshot
                of the app you offer in the Play Store.
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle size="xs">
                Developing new technologies and services
              </ListItemTitle>
              <ListItemContent size="xs">
                For Google consistent with these terms
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemTitle size="xs">
                Operating and improving the services
              </ListItemTitle>
              <ListItemContent size="xs">
                Which means allowing the services to work as designed and
                creating new features and functionalities. This includes using
                automated systems and algorithms to analyze your content
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
  padding: "40px 0",
  maxWidth: 580,
};
