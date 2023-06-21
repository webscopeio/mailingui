import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Text, ThemeProvider } from "@mailingui/components";
import { defaultTheme, type Theme } from "@mailingui/themes";

const StandardParagraph = () => {
  const theme: Theme = {
    ...defaultTheme,
    fontFamily: "Arial",
    variants: {
      ...defaultTheme.variants,
      primary: {
        ...defaultTheme.variants.primary,
        color: "#000000",
      },
      secondary: {
        ...defaultTheme.variants.secondary,
        color: "#a7abad",
      },
      success: {
        ...defaultTheme.variants.success,
        color: "#2737bb",
      },
    },
  };
  return (
    <Html>
      <Head />
      <Preview>Standard Paragraph</Preview>
      <Body style={main}>
        <ThemeProvider theme={theme}>
          <Container style={container}>
            <Text variant="success" size="lg">
              You are successfully subscribed to our newsletter!
            </Text>
            <Text variant="primary">
              We hope you will enjoy our content. If you have any questions,
              please contant us on our website. To keep your account secure,
              please don&apos;t forward this email to anyone. See our Help
              Center for more security tips.
            </Text>
            <Text variant="secondary">408 Warren Rd - San Mateo, CA 94402</Text>
          </Container>
        </ThemeProvider>
      </Body>
    </Html>
  );
};

export default StandardParagraph;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
};

const container = {
  padding: "40px 0",
  maxWidth: 580,
};
