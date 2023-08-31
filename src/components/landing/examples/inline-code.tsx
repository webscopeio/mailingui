import * as React from "react";
import { Container } from "@react-email/components";
import { P, InlineCode } from "@mailingui/components";

export default function InlineCodeExample() {
  return (
    <Container style={container}>
      <P compact style={{ fontSize: "20px", lineHeight: "40px" }}>
        Run <InlineCode>npx @mailingui/cli</InlineCode>
      </P>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
