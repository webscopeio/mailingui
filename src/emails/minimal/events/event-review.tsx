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
import React, { FC } from "react";
import {
  SocialIcon,
  type SocialIconType,
  Emoji,
  P,
  Link,
  H3,
  H1,
} from "@mailingui/components";

type EventReviewProps = {
  guestName: string;
  eventName: string;
};

const baseUrl = `${
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mailingui.com"
}/static/minimal-theme`;

export const EventReview: FC<EventReviewProps> = ({
  guestName = "Jacob",
  eventName = "Minimal Meetup",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - How Was It?</Preview>
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
            <H1>Share your Experience with Us</H1>
            <P>Dear, {guestName}:</P>
            <P>
              We hope you enjoyed yourself at the {eventName}. We wanted to take
              a moment to check in with you and ask about your experience!
            </P>
            <P>
              Please use the emojis below to <b>rate your overall experience</b>:
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ ...row, textAlign: "center" }}>
            <Column>
              <Emoji
                type="heart-eyes-face"
                style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                href="https://google.com"
                bg
              />
              Excellent
            </Column>
            <Column>
              <Emoji
                type="smiling-face"
                style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                href="https://google.com"
                bg
              />
              Good
            </Column>
            <Column>
              <Emoji
                type="smiling-face"
                style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                href="https://google.com"
                bg
              />
              Good
            </Column>
            <Column>
              <Emoji
                type="smiling-face"
                style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                href="https://google.com"
                bg
              />
              Good
            </Column>
            <Column>
              <Emoji
                type="smiling-face"
                style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                href="https://google.com"
                bg
              />
              Good
            </Column>
          </Row>
          <Row style={row}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
            <P>
              We genuinely value your opinion, and your feedback will guide us
              in crafting even more exceptional events in the future. Thank you
              for taking a moment to let us know your thoughts.
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

export default EventReview;

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
