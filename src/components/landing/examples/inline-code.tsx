import * as React from "react";
import { Container } from "@react-email/components";
import { P, InlineCode, H4 } from "@mailingui/components";

export default function InlineCodeExample() {
  return (
    <Container style={container}>
      <H4>
        Truly <InlineCode>inline_code</InlineCode>
      </H4>
      <P small>
        Some of them were asked to install the package:{" "}
        <InlineCode>npm i @jokester</InlineCode>
      </P>
    </Container>
  );
}

const container = {
  padding: "110px 0",
  maxWidth: 580,
};
