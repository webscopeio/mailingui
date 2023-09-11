import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { Blockquote } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <Blockquote>
            &quot;After all&quot; he said, &quot;everyone enjoys a good joke, so
            it&apos;s only fair that they should pay for the privilege.&quot;
          </Blockquote>
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
