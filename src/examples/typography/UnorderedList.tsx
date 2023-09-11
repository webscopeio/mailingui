import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { UL, LI } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <UL>
            <LI>Laughter is the best medicine for any gloomy day.</LI>
            <LI>Spreading smiles can brighten even the darkest of times.</LI>
            <LI>Humor unites people, regardless of their backgrounds.</LI>
          </UL>
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
