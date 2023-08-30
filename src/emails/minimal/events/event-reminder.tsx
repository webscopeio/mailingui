import * as React from "react";
import {
  Body,
  Column,
  Container,
  Html,
  Preview,
  Img,
  Head,
  Row,
} from "@react-email/components";
import {
  SocialIcon,
  type SocialIconType,
  Button,
  H3,
  H1,
  P,
  Link,
  UL,
  LI,
} from "@mailingui/components";

type EventReminderProps = {
  guestName: string;
  eventName: string;
  eventDate: string;
  eventVenue: string;
  eventTime: string;
  reservationUrl: string;
};

const baseUrl = `${
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mailingui.com"
}/static/minimal-theme`;

export const EventReminder: React.FC<EventReminderProps> = ({
  guestName = "Jacob",
  eventName = "Minimal",
  eventDate = "September 5, 2023",
  eventVenue = "Minimal HQ — Moravské nám. 1007/14",
  eventTime = "4PM - 9PM",
  reservationUrl = "#",
}) => (
  <Html>
    <Head />
    <Preview>Minimal - friendly reminder: Minimal is almost here!</Preview>
    <Body style={main}>
      <Container style={container} width={600}>
        <Row style={row}>
          <Column width={46} height={34}>
            <Img src={`${baseUrl}/star.png`} alt="Star" />
          </Column>
          <Column>
            <H3 compact>MINIMAL</H3>
          </Column>
        </Row>
        <Row style={row}>
          <Img width={520} src={`${baseUrl}/divider.png`} />
        </Row>
        <Row style={row}>
          <H1>{eventName} is Almost Here!</H1>
          <P>Dear, {guestName}:</P>
          <P>
            We&apos;re excited to remind you about the upcoming {eventName}! The
            event is just around the corner, and we can&apos;t wait to have you
            join us for this special day.
          </P>
          <Img width={520} src={`${baseUrl}/divider.png`} />
        </Row>
        <Row style={row}>
          <P compact>Here are the event details you need to know:</P>
          <P compact>
            <b>When:</b> {eventDate}
          </P>
          <P compact>
            <b>What Time:</b> {eventTime}
          </P>
          <P compact>
            <b>Where:</b> {eventVenue}
          </P>
        </Row>
        <Row style={row}>
          <Button
            href={reservationUrl}
            width={520}
            height={56}
            backgroundColor="#000000"
          >
            Share this Event
          </Button>
        </Row>
        <Row style={row}>
          <P>Here are some tips for this event:</P>
          <UL>
            <LI>
              <b>Arrival:</b> Plan to arrive a bit early to check in and grab a
              coffee before the event kicks off.
            </LI>
            <LI>
              <b>Networking:</b> There will be ample opportunities to network
              with fellow attendees, so bring your business cards and
              enthusiasm.{" "}
            </LI>
          </UL>
          <P>
            Looking forward to seeing you at {eventName} and sharing an
            incredible day together!
          </P>
          <P>
            Best regards,
            <br /> Minimal Team
          </P>
          <Img width={520} src={`${baseUrl}/divider.png`} />
        </Row>
        <Row style={row}>
          {(
            [
              "linkedin",
              "skype",
              "medium",
              "twitter",
              "facebook",
            ] as SocialIconType[]
          ).map((type, i) => (
            <div key={i}>
              <Column width={24} style={{ paddingRight: "20px" }}>
                <SocialIcon
                  type={type}
                  style={{ margin: 0 }}
                  size={24}
                  href="https://google.com"
                />
              </Column>
            </div>
          ))}
          <Column width={520 - 196}></Column>
        </Row>
        <Row>
          <P compact muted>
            © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois 85486
          </P>
          <P compact muted>
            <Link muted href="#unsubscribe">
              Unsubscribe
            </Link>{" "}
            ·{" "}
            <Link muted href="#tos">
              Terms of Use
            </Link>{" "}
            ·{" "}
            <Link muted href="#pp">
              Privacy Policy
            </Link>
          </P>
          <P small muted>
            Disclaimer: If you have any dietary restrictions or special
            requirements, please let us know as soon as possible by replying to
            this email and we&apos;ll do our best to accommodate you.
          </P>
        </Row>
      </Container>
    </Body>
  </Html>
);

export default EventReminder;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "60px 40px 40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 24px",
};
