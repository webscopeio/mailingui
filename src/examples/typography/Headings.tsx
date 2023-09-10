import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { H1, H2, H3, H4 } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <H1>The Joke Tax Chronicles</H1>
          <H2>The King&apos;s Plan</H2>
          <H3>The Joke Tax</H3>
          <H4>People stopped telling jokes</H4>
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
