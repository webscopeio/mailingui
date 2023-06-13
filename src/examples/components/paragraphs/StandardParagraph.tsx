import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Paragraph } from "@mailingui/components";

const StandardParagraph = () => {
  return (
    <Html>
      <Head />
      <Preview>Standard Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum dolor quis aliquet posuere. Donec purus felis, faucibus
            quis congue venenatis, volutpat vitae enim. Quisque eu ex faucibus,
            vestibulum neque et, rutrum libero. Sed condimentum efficitur est,
            sit amet interdum quam tincidunt at.
          </Paragraph>
          <Paragraph>
            Ut finibus leo eget tincidunt fringilla. Cras porta porta magna eu
            sollicitudin. In nec finibus mi. Sed risus dui, dapibus nec
            dignissim a, luctus id diam. Maecenas egestas magna at justo
            consequat pretium.
          </Paragraph>
        </Container>
      </Body>
    </Html>
  );
};

export default StandardParagraph;

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
