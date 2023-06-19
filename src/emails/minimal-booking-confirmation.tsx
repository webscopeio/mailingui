import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Img,
  Row,
} from "@react-email/components";
import React from "react";
import {
  Text,
  SocialIcon,
  type SocialIconType,
  MinimalButton,
} from "@mailingui/components";

export const MinimalNews = () => {
  const baseUrl = `${
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
  }/static/minimal-theme`;

  return (
    <Html>
      <Head />
      <Preview>Minimal - we&apos;ve received your booking</Preview>
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
          <Row style={{ marginBottom: "32px" }}>
            <Text style={{ fontSize: "48px", lineHeight: "52px" }}>
              Your Hotel Booking Confirmation
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear Jacob,</Text>
            <Text>
              Thank you for choosing to stay with us at Viola Hotel. We are
              pleased to confirm your booking for <b>August 22, 2023</b> to{" "}
              <b>September 5, 2023</b>.
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              <b>Room Type:</b> Business apartment
            </Text>
            <Text>
              <b>Number of Guests:</b> 3
            </Text>
            <Text>
              <b>Check-in Time:</b> 2 PM
            </Text>
            <Text>
              <b>Check-out Time:</b> 10 AM
            </Text>
            <Text>
              <b>Total Cost:</b> $ 1253.00
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <MinimalButton href="https://google.com">
              Manage your reservation
            </MinimalButton>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              We hope you will enjoy your stay with us and take advantage of the
              amenities and services we offer. Should you have any special
              requests or requirements, please do not hesitate to contact our
              front desk team.
            </Text>
            <Text>
              Please note that a deposit may be required upon check-in and any
              additional charges will be applied to your final bill upon
              check-out.
            </Text>
            <Text>
              Thank you again for choosing [Hotel Name]. We look forward to
              welcoming you soon.
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

export default MinimalNews;

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
