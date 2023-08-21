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
  Text,
  SocialIcon,
  type SocialIconType,
  Emoji,
} from "@mailingui/components";

type EventReviewProps = {
  name: string;
  eventName: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const EventReview: FC<EventReviewProps> = ({
  name = "Jacob",
  eventName = "Minimal Meetup",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - How Was It?</Preview>
      <Body style={main}>
        <Container style={container} width={600}>
          <Row style={{ marginBottom: "16px" }}>
            <Column width={46} height={34}>
              <Img src={`${baseUrl}/star.png`} alt="Star" />
            </Column>
            <Column>
              <Text
                style={{
                  fontSize: "30px",
                  lineHeight: "36px",
                }}
              >
                MINIMAL
              </Text>
            </Column>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text style={{ fontSize: "48px", lineHeight: "52px" }}>
              How Was It?
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear {name},</Text>
            <Text>
              We hope you enjoyed yourself at the {eventName}. We wanted to take
              a moment to check in with you and ask about your experience!
            </Text>
            <Text>
              At Viola Studio, we are committed to providing our customers with
              the best possible experience, and we want to ensure that we are
              meeting that goal. We would be grateful if you could take a few
              minutes to share your thoughts on your experience with us.
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px", textAlign: "center" }}>
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
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              Your feedback is important to us, and it will help us identify
              areas where we can improve and better serve our customers. We
              value your opinion, and we would appreciate any suggestions or
              comments that you may have.
            </Text>
            <Text>
              Thank you for your time and consideration, and we look forward to
              hearing from you soon.
            </Text>
            <Text>
              Best regards,
              <br /> Minimal Team
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
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
            <Text>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </Text>
            <Text>
              <a
                href="#unsubscribe"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Unsubscribe
              </a>{" "}
              ·{" "}
              <a
                href="#tos"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Terms of Use
              </a>{" "}
              ·{" "}
              <a
                href="#pp"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Privacy Policy
              </a>
            </Text>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default EventReview;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0 122px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
