import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Divider, Text, Theme, ThemeProvider } from "@mailingui/components";
import { defaultTheme } from "@mailingui/themes";

const ThemedDivider = () => {
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
      <Preview>Themed Diver</Preview>
      <Body style={main}>
        <ThemeProvider theme={theme}>
          <Container style={container}>
            <Divider dividerWidth={580}>Divider</Divider>
            <Text>Some text</Text>
            <Divider />
          </Container>
        </ThemeProvider>
      </Body>
    </Html>
  );
};

export default ThemedDivider;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "55px 0",
  textAlign: "center" as const,
  width: 580,
};
