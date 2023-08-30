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
  P,
  Link,
  H3,
  H1,
} from "@mailingui/components";

type MinimalResetPasswordProps = {
  guestName: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventVenue: string;
  confirmBy: string;
  confirmUrl: string;
};

const baseUrl = `${
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mailingui.com"
}/static/minimal-theme`;

export const EventInvitation: React.FC<MinimalResetPasswordProps> = ({
  guestName = "Jacob",
  eventName = "Minimal",
  eventDate = "August 22, 2023",
  eventTime = "4PM - 9PM",
  eventVenue = "Minimal HQ — Moravské nám. 1007/14",
  confirmBy = "August 20, 2023",
  confirmUrl = "https://google.com",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Attend our event</Preview>
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
            <H1>You&apos;re Invited to {eventName}!</H1>
            <P>Dear, {guestName}:</P>
            <P>
              We&apos;re thrilled to extend an exclusive invitation to you for a
              truly exceptional event: {eventName}! Prepare to embark on a
              journey of knowledge, inspiration, and networking like never
              before on{" "}
              <b>
                {eventDate} at {eventVenue}
              </b>
              .
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
            <P compact>
              <b>When:</b> {eventDate}
            </P>
            <P compact>
              <b>What Time:</b> {eventTime}
            </P>
            <P compact>
              <b>Where:</b> {eventVenue}
            </P>
            <P>
              Your presence would honor us and add to the vibrancy of{" "}
              {eventName}. Kindly RSVP by {confirmBy} to secure your spot. Click
              the button below to confirm your attendance.
            </P>
            <Button
              href={confirmUrl}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Confirm your attendance
            </Button>
            <P>
              We&apos;re eagerly counting down the days to welcome you at{" "}
              {eventName}. Should you have any questions or need assistance,
              please don&apos;t hesitate to contact us.
            </P>
            <P>Let&apos;s make this event a memorable one together!</P>
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
          <Row style={row}>
            <P compact muted>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
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
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default EventInvitation;

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
