import * as React from "react";

import {
  Body,
  Container,
  Html,
  Preview,
  Head,
  Row,
  Column,
} from "@react-email/components";

import { body, container, row } from "../shared/styles";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

import { H1, P, HR, Emoji } from "@mailingui/components";

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
              <H1>Share your Experience with Us</H1>
              <P>Dear {eventGuest},</P>
              <P>
                We hope you enjoyed yourself at the {eventName}. We wanted to
                take a moment to check in with you and ask about your
                experience!
              </P>
              <P>
                Please use the emojis below to{" "}
                <b>rate your overall experience</b>:
              </P>
              <Row style={{ ...row, textAlign: "center" }}>
                <Column>
                  <Emoji
                    type="enraged-face"
                    style={{ paddingBottom: "8px" }}
                    href="https://google.com"
                    bg
                  />
                  <P compact>Terrible</P>
                </Column>
                <Column>
                  <Emoji
                    type="sad-face"
                    style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                    href="https://google.com"
                    bg
                  />
                  <P compact>Bad</P>
                </Column>
                <Column>
                  <Emoji
                    type="neutral-face"
                    style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                    href="https://google.com"
                    bg
                  />
                  <P compact>Neutral</P>
                </Column>
                <Column>
                  <Emoji
                    type="smiling-face"
                    style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                    href="https://google.com"
                    bg
                  />
                  <P compact>
                  Good
                  </P>
                </Column>
                <Column>
                  <Emoji
                    type="heart-eyes-face"
                    style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                    href="https://google.com"
                    bg
                  />
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
