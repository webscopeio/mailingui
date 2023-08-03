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

type EventConfirmationProps = {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  totalCost: string;
  eventName: string;
  reservationUrl: string;
  noOfPeople: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const EventConfirmation: FC<EventConfirmationProps> = ({
  name = "Jacob",
  startTime = "4 PM",
  endTime = "9 PM",
  date = "September 5, 2023",
  totalCost = "$ 28.00",
  eventName = "Minimal Meetup",
  reservationUrl = "https://google.com",
  noOfPeople = "2",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - we&apos;ve confirmed your participation</Preview>
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
              Your {eventName} Event Confirmation
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear {name},</Text>
            <Text>
              Thank you for signing up for the {eventName}. Via this email we
              are confirming your participation.
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              <b>Date:</b> {date}
            </Text>
            <Text>
              <b>Start Time:</b> {startTime}
            </Text>
            <Text>
              <b>End Time:</b> {endTime}
            </Text>
            <Text>
              <b>Number of People:</b> {noOfPeople}
            </Text>
            <Text>
              <b>Entry Fee:</b> {totalCost}
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Button
              href={reservationUrl}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Change Attendance
            </Button>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              We hope you see you at the event and don&apos;t forget to take
              advantage of the amenities and services we offer. Should you have
              any special requests or requirements, please do not hesitate to
              contact us.
            </Text>
            <Text>
              Please note there will be a photographer at the event and we will
              be taking photos for promotional purposes. If you do not wish to
              be photographed, please let us know.
            </Text>
            <Text>
              Thank you again for your interest. We look forward to seeing you
              there.
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

export default EventConfirmation;

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
