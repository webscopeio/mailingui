import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { OL, LI } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <OL>
            <LI>
              Why don&apos;t scientists trust atoms? Because they make up
              everything!
            </LI>
            <LI>
              Parallel lines have so much in common. It&apos;s a shame
              they&apos;ll never meet.
            </LI>
            <LI>How do you organize a space party? You &quot;planet&quot;!</LI>
          </OL>
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
