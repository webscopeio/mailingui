import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Paragraph, ThemeProvider } from "@mailingui/components";
import { defaultTheme, type Theme } from "@mailingui/themes";

const StandardParagraph = () => {
  const theme: Theme = {
    ...defaultTheme,
    fontFamily: "Arial",
    variants: {
      ...defaultTheme.variants,
      primary: {
        ...defaultTheme.variants.primary,
        color: "#3a0ca3",
      },
      success: {
        ...defaultTheme.variants.success,
        color: "#38b000",
      },
      warning: {
        ...defaultTheme.variants.warning,
        color: "#ff8c00",
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
            <Paragraph variant="primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vestibulum dolor quis aliquet posuere. Donec purus felis, faucibus
              quis congue venenatis, volutpat vitae enim. Quisque eu ex
              faucibus, vestibulum neque et, rutrum libero. Sed condimentum
              efficitur est, sit amet interdum quam tincidunt at.
            </Paragraph>
            <Paragraph variant="success">
              Ut finibus leo eget tincidunt fringilla. Cras porta porta magna eu
              sollicitudin. In nec finibus mi. Sed risus dui, dapibus nec
              dignissim a, luctus id diam. Maecenas egestas magna at justo
              consequat pretium.
            </Paragraph>
            <Paragraph variant="warning">
              Pellentesque et justo sagittis, efficitur lectus sit amet,
              pellentesque sem. Nulla luctus odio quis nulla ornare
              sollicitudin. Ut rutrum nulla non posuere varius. Vivamus congue
              interdum sollicitudin. Vivamus a varius turpis. Phasellus risus
              ligula, iaculis eu quam quis, imperdiet lacinia justo. Cras purus
              massa, pretium et molestie a, commodo ut dui.
            </Paragraph>
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
