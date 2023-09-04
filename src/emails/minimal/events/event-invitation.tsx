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
import { MinimalButton } from "../shared/MinimalButton";
import { Footer } from "../shared/Footer";

import { H1, P, HR } from "@mailingui/components";

export default function EventInvitation({
  preview = "You're invited to Minimal!",
  eventGuest = "Jacob",
  eventName = "Minimal",
  eventDate = "August 22, 2023",
  eventTime = "4PM - 9PM",
  eventAddress = "Minimal HQ — Moravské nám. 1007/14",
  confirmBy = "August 20, 2023",
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
              <H1>You&apos;re invited to {eventName}!</H1>
              <P>Dear {eventGuest},</P>
              <P>
                We&apos;re thrilled to extend an exclusive invitation to you for
                a truly exceptional event: {eventName}! Prepare to embark on a
                journey of knowledge, inspiration, and networking like never
                before.
              </P>
              <P compact>
                <b>When:</b> {eventDate}
              </P>
              <P compact>
                <b>What Time:</b> {eventTime}
              </P>
              <P compact>
                <b>Where:</b> {eventName} HQ — {eventAddress}
              </P>
              <HR />
              <P>
                Your presence would honor us and add to the vibrancy of{" "}
                {eventName}. Kindly RSVP by {confirmBy} to secure your spot.
                Click the button below to confirm your attendance.
              </P>
              <MinimalButton href="#">Confirm your Attendance</MinimalButton>
              <P>
                We&apos;re eagerly counting down the days to welcome you at{" "}
                {eventName}. Should you have any questions or need assistance,
                please don&apos;t hesitate to contact us.
              </P>
              <P>Let&apos;s make this event a memorable one together!</P>
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
