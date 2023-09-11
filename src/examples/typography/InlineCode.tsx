import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { H2, P, Code } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <H2>Truly <Code>inline_code</Code></H2>
          <P>
            Some of them were asked to install the package:{" "}
            <Code>npm i @jokester</Code>
          </P>
        </Container>
      </Body>
    </Html>
  );
}

export const body: React.CSSProperties = {
  backgroundColor: "#fff", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  padding: "60px 30px",
  maxWidth: "600px", // Estalbish the maximum size of the email
};