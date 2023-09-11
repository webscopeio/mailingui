import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { P, Link } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <P>
            The king thought long and hard, and finally came up with a{" "}
            <Link href="#">brilliant plan</Link>: he would tax the jokes in the
            kingdom.
          </P>
          <P>
          <Link block href="#">More brilliant plans →</Link>
          <Link block href="#">Terrible brilliant plans →</Link>
          <Link block href="#">Not so terrible brilliant plans →</Link>
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
