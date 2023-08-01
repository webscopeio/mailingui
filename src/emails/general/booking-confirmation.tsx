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

type MinimalBookingConfirmationProps = {
  name: string;
  checkInDate: string;
  checkOutDate: string;
  checkInTime: string;
  checkOutTime: string;
  roomType: string;
  totalCost: string;
  noOfGuests: number;
  hotelName: string;
  reservationUrl: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const BookingConfirmation: FC<MinimalBookingConfirmationProps> = ({
  name = "Jacob",
  checkInDate = "August 22, 2023",
  checkOutDate = "September 5, 2023",
  checkInTime = "2 PM",
  checkOutTime = "10 AM",
  roomType = "Business apartment",
  totalCost = "$ 1253.00",
  hotelName = "Viola Hotel",
  noOfGuests = 3,
  reservationUrl = "https://google.com",
}) => {
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
              Your {hotelName} Booking Confirmation
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear {name},</Text>
            <Text>
              Thank you for choosing to stay with us at {hotelName}. We are
              pleased to confirm your booking for <b>{checkInDate}</b> to{" "}
              <b>{checkOutDate}</b>.
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              <b>Room Type:</b> {roomType}
            </Text>
            <Text>
              <b>Number of Guests:</b> {noOfGuests}
            </Text>
            <Text>
              <b>Check-in Time:</b> {checkInTime}
            </Text>
            <Text>
              <b>Check-out Time:</b> {checkOutTime}
            </Text>
            <Text>
              <b>Total Cost:</b> {totalCost}
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Button
              href={reservationUrl}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Manage your reservation
            </Button>
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
              Thank you again for choosing {hotelName}. We look forward to
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

export default BookingConfirmation;

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
