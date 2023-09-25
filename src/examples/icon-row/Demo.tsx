import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { IconRow } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Hello Demo</Preview>
      <Body style={body}>
        <Container style={container}>
          <IconRow
            align="center"
            fullWidth={true}
            icons={[
              {
                href: "#",
                src: "https://i.ibb.co/W3xxzyp/confounded-face.png",
                text: "Terrible",
              },
              {
                href: "#",
                src: "https://i.ibb.co/qy348qN/neutral-face.png",
                text: "Okay",
              },
              {
                href: "#",
                src: "https://i.ibb.co/Qn1rS3S/similing-face.png",
                text: "Great",
              },
              {
                href: "#",
                src: "https://i.ibb.co/Msz3Tqm/heart-eyes-face.png",
                text: "Excelent",
              },
            ]}
            iconWidth={45}
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
