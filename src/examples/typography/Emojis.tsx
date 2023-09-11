import * as React from "react";
import { Body, Column, Container, Html, Row } from "@react-email/components";
import { Img } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column align="center">
              <Img
                width={32}
                src={"https://i.ibb.co/W3xxzyp/confounded-face.png"}
              />
            </Column>
            <Column align="center">
              <Img
                width={32}
                src={"https://i.ibb.co/qy348qN/neutral-face.png"}
              />
            </Column>
            <Column align="center">
              <Img
                width={32}
                src={"https://i.ibb.co/Qn1rS3S/similing-face.png"}
              />
            </Column>
            <Column align="center">
              <Img
                width={32}
                src={"https://i.ibb.co/Msz3Tqm/heart-eyes-face.png"}
              />
            </Column>
            <Column align="center">
              <Img
                width={32}
                src={"https://i.ibb.co/mTFWRLS/thumbs-down.png"}
              />
            </Column>
            <Column align="center">
              <Img
                width={32}
                src={"https://i.ibb.co/nc5tK5J/thumbs-up.png"}
              />
            </Column>
          </Row>
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
