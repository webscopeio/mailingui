import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Text } from "@mailingui/components";

const BasicParagraphs = () => {
  return (
    <Html>
      <Head />
      <Preview>Standard Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vestibulum dolor quis aliquet posuere. Donec purus felis, faucibus
            quis congue venenatis, volutpat vitae enim. Quisque eu ex faucibus,
            vestibulum neque et, rutrum libero. Sed condimentum efficitur est,
            sit amet interdum quam tincidunt at.
          </Text>
          <Text>
            Ut finibus leo eget tincidunt fringilla. Cras porta porta magna eu
            sollicitudin. In nec finibus mi. Sed risus dui, dapibus nec
            dignissim a, luctus id diam. Maecenas egestas magna at justo
            consequat pretium.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default BasicParagraphs;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "50px 0",
  maxWidth: 580,
};
