import * as React from "react";

import { Body, Container, Html } from "@react-email/components";
 
export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          {/* Get Started */}
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
 