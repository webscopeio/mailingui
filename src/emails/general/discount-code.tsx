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
  code: string;
  discount: number;
  link: string;
  expiration: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const MinimalDiscoutCode: FC<MinimalResetPasswordProps> = ({
  code = "HAPPY20",
  discount = 20,
  link = "https://google.com",
  expiration = "July 31, 2023",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - don&apos;t miss out on new discounts</Preview>
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
              Special Discount for you
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear customer,</Text>
            <Text>
              As a thank you for your continued support and loyalty, we would
              like to offer you a special discount on your next purchase from
              Viola store.
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Text style={{ fontSize: "48px", lineHeight: "52px" }}>{code}</Text>
            <Text size="sm" style={{ color: "#64748B", paddingRight: "44px" }}>
              Use the coupon code at checkout to receive {discount}% off your
              total order. This offer is valid until {expiration}, so be sure to
              take advantage of it before it expires.
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            We have recently launched new products and we invite you to check
            them out.
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Button
              href={link}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              View products
            </Button>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              We appreciate your business and hope that this discount makes your
              shopping experience with us even better. If you have any questions
              or need further assistance, please do not hesitate to contact our
              customer support team.
            </Text>
            <Text>
              Thank you again for your support and we look forward to serving
              you soon.
            </Text>
            <Text>
              Sincerely,
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

export default MinimalDiscoutCode;

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
