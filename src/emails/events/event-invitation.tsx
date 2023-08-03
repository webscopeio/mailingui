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
  Button,
} from "@mailingui/components";

type MinimalResetPasswordProps = {
  name: string;
  date: string;
  time: string;
  location: string;
  confirmBy: string;
  confirmUrl: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const EventInvitation: FC<MinimalResetPasswordProps> = ({
  name = "Jacob",
  date = "August 22, 2023",
  time = "5 PM",
  location = "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  confirmBy = "July 31, 2023",
  confirmUrl = "https://google.com",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Attend our event</Preview>
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
              Invitation to Minimal Meetup
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear {name},</Text>
            <Text>
              We are delighted to invite you to Viola Meetup, which will be held
              on <b>{date}</b> at <b>{time}</b> at <b>{location}</b>. As one of
              our valued clients, we would be honored if you could join us for
              this special occasion.
            </Text>
            <Text>
              Viola Meetup promises to be an exciting and memorable event. We
              have also arranged for awesome food, speakers and performers, so
              you can enjoy a fun-filled and engaging experience.
            </Text>
            <Text>
              We believe that this event is an excellent opportunity for you to
              meet like-minded people or learn something new, and we hope that
              you will be able to join us. Please confirm your attendance by{" "}
              {confirmBy} to ensure that we can make adequate arrangements for
              you.
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Button
              href={confirmUrl}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Confirm participation
            </Button>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              {" "}
              We look forward to seeing you at Viola Meetup, and we thank you
              for your continued support.
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

export default EventInvitation;

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
