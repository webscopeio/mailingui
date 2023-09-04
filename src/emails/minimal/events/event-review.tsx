import * as React from "react";

import {
  Body,
  Container,
  Html,
  Preview,
  Head,
  Row,
  Column,
  Img,
  Link,
} from "@react-email/components";

import { body, container, row } from "../shared/styles";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

import { H1, P, HR } from "@mailingui/components";

export default function EventReview({
  preview = "How was it?",
  eventGuest = "Jacob",
  eventName = "Minimal",
}: Record<string, string>) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Header />
          <Row style={row}>
            <Column>
              <HR />
              <H1>Share your experience with us</H1>
              <P>Dear {eventGuest},</P>
              <P>
                We hope you enjoyed yourself at the {eventName}. We wanted to
                take a moment to check in with you and ask about your
                experience!
              </P>
              <P>
                <b>Rate your overall experience</b>:
              </P>
              <Row>
                <Column align="center">
                  <Link href="#">
                    <Img src={"https://i.ibb.co/W3xxzyp/confounded-face.png"} />
                  </Link>
                  <P compact>Terrible</P>
                </Column>
                <Column align="center">
                  <Link href="#">
                    <Img src={"https://i.ibb.co/qy348qN/neutral-face.png"} />
                  </Link>
                  <P compact>Okay</P>
                </Column>
                <Column align="center">
                  <Link href="#">
                    <Img src={"https://i.ibb.co/Qn1rS3S/similing-face.png"} />
                  </Link>
                  <P compact>Great</P>
                </Column>
                <Column align="center">
                  <Link href="#">
                    <Img src={"https://i.ibb.co/Msz3Tqm/heart-eyes-face.png"} />
                  </Link>
                  <P compact>Excelent</P>
                </Column>
              </Row>
              <HR />
              <P>
                We genuinely value your opinion, and your feedback will guide us
                in crafting even more exceptional events in the future. Thank
                you for taking a moment to let us know your thoughts.
              </P>
              <P muted>
                Best regards,
                <br /> Minimal Team
              </P>
            </Column>
          </Row>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
}
