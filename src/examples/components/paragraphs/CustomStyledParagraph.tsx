import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Text } from "@mailingui/components";

const CustomStyledParagraph = () => {
  return (
    <Html>
      <Head />
      <Preview>Custom Styled Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={{ fontSize: "22px", margin: "60px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Text style={{ fontSize: "22px", margin: "60px" }}>
            Second centered Paragraph Component. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomStyledParagraph;

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
