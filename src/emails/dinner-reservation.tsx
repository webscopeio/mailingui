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
import React, { FC } from "react";
import { Text, SocialIcon, type SocialIconType } from "@mailingui/components";

type DinnerReservationProps = {
  name: string;
  date: string;
  time: string;
  noOfGuests: string;
  tableNo: string;
  restaurantName: string;
  restaurantPhone: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const DinnerReservation: FC<DinnerReservationProps> = ({
  name = "Charlie",
  date = "24.02.2023",
  time = "6 PM",
  noOfGuests = "2 Adults",
  tableNo = "Table 13",
  restaurantName = "Minimal Restaurant",
  restaurantPhone = "+1 234 567 89",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Dinner Reservation Confirmation</Preview>
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
              Dinner Reservation Confirmation
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear {name},</Text>
            <Text>
              Thank you for choosing Olive Grove for your upcoming dinner. We
              are pleased to confirm your reservation as follows:
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Text style={{ fontWeight: 700 }}>Reservation details:</Text>
            <Text>
              <b>Date:</b> {date}
            </Text>
            <Text>
              <b>Time:</b> {time}
            </Text>
            <Text>
              <b>Number of guests:</b> {noOfGuests}
            </Text>
            <Text>
              <b>Table number:</b> {tableNo}
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              We look forward to providing you with an unforgettable dining
              experience. If you have any dietary requirements or special
              requests, please let us know in advance.
            </Text>
            <Text>
              Please note that your reservation will be held for 15 minutes past
              the reserved time. If you anticipate arriving later than the
              reserved time, please call {restaurantPhone} to inform us.
            </Text>
            <Text>
              Thank you for choosing {restaurantName}. We look forward to
              welcoming you soon.
            </Text>
            <Text>
              Best regards,
              <br />
              Minimal Team
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

export default DinnerReservation;

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
