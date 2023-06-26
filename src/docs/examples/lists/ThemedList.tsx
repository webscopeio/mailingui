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
              <ListItemTitle variant="default">
                Everything is set up!
              </ListItemTitle>
              <ListItemContent>
                Now you can start using your account! Log in on our website.
              </ListItemContent>
            </ListItem>
            <ListItem variant="brand">
              <ListItemTitle>
                Somebody tried to get into your account!
              </ListItemTitle>
              <ListItemContent size="sm">
                You can ignore this message if you were the one who tried to get
                into your account.
              </ListItemContent>
            </ListItem>
            <ListItem size="xs" variant="subtle">
              <ListItemTitle>
                We are happy to help anytime you need
              </ListItemTitle>
              <ListItemContent>
                You can find us at our website, send us an email or in our
                offices at 420 Wick Way New York, NY 10001 United States.
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
