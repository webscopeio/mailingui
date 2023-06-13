import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Divider, Text, Theme, ThemeProvider } from "@mailingui/components";
import { defaultTheme } from "@mailingui/themes";

const ThemedDividerWithText = () => {
  const theme: Theme = {
    ...defaultTheme,
    variants: {
      ...defaultTheme.variants,
      secondary: {
        backgroundColor: "#fff",
        color: "#711696",
        borderColor: "#b786ce",
      },
    },
  };
  return (
    <Html>
      <Head />
      <Preview>Themed Divider With Text</Preview>
      <Body style={main}>
        <ThemeProvider theme={theme}>
          <Container style={container}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Divider>Divider</Divider>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
          </Container>
        </ThemeProvider>
      </Body>
    </Html>
  );
};

export default ThemedDividerWithText;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "55px 0",
  textAlign: "center" as const,
  maxWidth: 580,
};
