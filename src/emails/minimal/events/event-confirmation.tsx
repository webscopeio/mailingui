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

export default function EventConfirmation({
  preview = "Get Ready! You're in for Minimal!",
  eventGuest = "Jacob",
  eventName = "Minimal",
  eventDate = "August 22, 2023",
  eventTime = "4PM - 9PM",
  eventAddress = "Moravské nám. 1007/14",
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
              <H1>Get Ready! You&apos;re in for {eventName}!</H1>
              <P>Dear {eventGuest},</P>
              <P>
                We are thrilled to inform you that your registration for{" "}
                {eventName}
                has been successfully confirmed! Get ready for an unforgettable
                experience on{" "}
                <b>
                  {eventDate} at {eventName} HQ — {eventAddress}
                </b>
                . We can&apos;t wait to have you join us for this exciting
                event.
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
              <MinimalButton href="#">Save on Calendar</MinimalButton>
              <P>
                Feel free to reach out to us if you have any questions or need
                further assistance. We&apos;re here to make sure you have a
                seamless and enjoyable experience.
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
