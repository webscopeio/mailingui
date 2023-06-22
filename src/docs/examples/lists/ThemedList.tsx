import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import {
  ListRoot,
  ListItem,
  ListItemTitle,
  ListItemContent,
  ThemeProvider,
} from "@mailingui/components";
import { defaultTheme, type Theme } from "@mailingui/themes";

export default function VerticalList() {
  const theme: Theme = {
    ...defaultTheme,
    variants: {
      ...defaultTheme.variants,
      default: {
        ...defaultTheme.variants.default,
        color: "#000000",
      },
      subtle: {
        ...defaultTheme.variants.primary,
        color: "#a7abad",
      },
      warning: {
        ...defaultTheme.variants.warning,
        color: "#ee9b00",
      },
      success: {
        ...defaultTheme.variants.success,
        color: "#0a9396",
      },
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <ThemeProvider theme={theme}>
            <ListRoot>
              <ListItem>
                <ListItemTitle variant="success">
                  Everything is set up!
                </ListItemTitle>
                <ListItemContent>
                  Now you can start using your account! Log in on our website.
                </ListItemContent>
              </ListItem>
              <ListItem variant="warning">
                <ListItemTitle>
                  Somebody tried to get into your account!
                </ListItemTitle>
                <ListItemContent size="sm">
                  You can ignore this message if you were the one who tried to
                  get into your account.
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
          </ThemeProvider>
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
  padding: "20px 0",
  maxWidth: 580,
};
