import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { IconRow } from "@mailingui/components";
import { baseUrl } from "src/emails/minimal/events/shared/assets";

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Hello Demo</Preview>
      <Body style={body}>
        <Container style={container}>
          <IconRow
            align="center"
            icons={[
              {
                href: "#",
                src: `${baseUrl}/icons/github.png`,
              },
              {
                href: "#",
                src: `${baseUrl}/icons/linkedin.png`,
              },
              {
                href: "#",
                src: `${baseUrl}/icons/slack.png`,
              },
              {
                href: "#",
                src: `${baseUrl}/icons/twitter.png`,
              },
            ]}
            iconWidth={32}
            iconGap={28}
          />
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
