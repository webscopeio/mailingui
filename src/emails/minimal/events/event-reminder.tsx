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

import { H1, P, HR, UL, LI } from "@mailingui/components";

export default function EventReminder({
  preview = "Minimal is almost here!",
  eventGuest = "Jacob",
  eventName = "Minimal",
  eventDate = "August 22, 2023",
  eventTime = "4PM - 9PM",
  eventAddress = "Minimal HQ — Moravské nám. 1007/14",
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
              <H1>{eventName} is almost here!</H1>
              <P>Dear {eventGuest},</P>
              <P>
                We&apos;re excited to remind you about the upcoming {eventName}!
                The event is just around the corner, and we can&apos;t wait to
                have you join us for this special day.
              </P>
              <HR />
              <P compact>Here are the event details you need to know:</P>
              <P compact>
                <b>When:</b> {eventDate}
              </P>
              <P compact>
                <b>What Time:</b> {eventTime}
              </P>
              <P compact>
                <b>Where:</b> {eventAddress}
              </P>
              <MinimalButton href="#">Share this Event</MinimalButton>
              <P>Here are some tips for this event:</P>
              <UL>
                <LI>
                  <b>Arrival:</b> Plan to arrive a bit early to check in and
                  grab a coffee before the event kicks off.
                </LI>
                <LI>
                  <b>Networking:</b> There will be ample opportunities to
                  network with fellow attendees, so bring your business cards
                  and enthusiasm.{" "}
                </LI>
              </UL>
              <P>
                Looking forward to seeing you at {eventName} and sharing an
                incredible day together!
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
