import { Column, Container, Img, Row } from "@react-email/components";
import React, { FC } from "react";
import {
  Text,
  SocialIcon,
  type SocialIconType,
  Button,
} from "@mailingui/components";

type MinimalResetPasswordProps = {
  code?: string;
  link?: string;
  expiration?: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const MinimalDiscoutCode: FC<MinimalResetPasswordProps> = ({
  code = "HAPPY20",
  link = "#",
  expiration = "July 31, 2023",
}) => {
  return (
    <div className="mx-auto max-[373px]:w-[255px]">
      <Container
        style={container}
        width={310}
        className="origin-top-left scale-[0.825] min-[373px]:scale-100"
      >
        <Row style={{ marginBottom: "10px", marginTop: "30px" }} width={270}>
          <Column width={28} height={17}>
            <Img src={`${baseUrl}/star.png`} alt="Star" width={22} />
          </Column>
          <Column>
            <Text
              style={{
                fontSize: "22px",
                lineHeight: "26px",
              }}
            >
              MINIMAL
            </Text>
          </Column>
        </Row>
        <Row style={{ marginBottom: "32px" }} width={270}>
          <Column>
            <Img
              width={270}
              src={`${baseUrl}/divider.png`}
              style={{ height: 11, objectFit: "cover" }}
            />
          </Column>
        </Row>
        <Row width={270}>
          <Column>
            <Text style={{ fontSize: "32px", lineHeight: "34px" }}>
              Special Discount for you
            </Text>
          </Column>
        </Row>
        <Row style={{ marginBottom: "10px" }} width={270}>
          <Column>
            <Text>Dear customer,</Text>
            <Text>
              As a thank you for your continued support and loyalty, we would
              like to offer you a special discount on your next purchase from
              Viola store.
            </Text>
          </Column>
        </Row>
        <Row style={{ marginBottom: "20px" }} width={270}>
          <Column>
            <Img
              width={270}
              src={`${baseUrl}/divider.png`}
              style={{ height: 11, objectFit: "cover" }}
            />
          </Column>
        </Row>
        <Row style={{ marginBottom: "10px" }} width={270}>
          <Column>
            <Text style={{ fontSize: "48px", lineHeight: "52px" }}>{code}</Text>
            <Text size="sm" style={{ color: "#64748B", paddingRight: "44px" }}>
              This offer is valid until {expiration}.
            </Text>
          </Column>
        </Row>
        <Row style={{ marginBottom: "10px" }} width={270}>
          <Column>
            <Img
              width={270}
              src={`${baseUrl}/divider.png`}
              style={{ height: 11, objectFit: "cover" }}
            />
          </Column>
        </Row>
        <Row style={{ marginBottom: "10px" }} width={270}>
          <Column>
            <Text>
              We have recently launched new products and we invite you to check
              them out.
            </Text>
          </Column>
        </Row>
        <Row style={{ marginBottom: "32px" }} width={270}>
          <Column>
            <Button
              href={link}
              width={270}
              height={56}
              backgroundColor="#000000"
            >
              View products
            </Button>
          </Column>
        </Row>
        <Row style={{ marginBottom: "16px" }} width={270}>
          <Column>
            <Text>
              We appreciate your business and hope that this discount makes your
              shopping experience with us even better.
            </Text>
            <Text>
              Thank you again for your support and we look forward to serving
              you soon.
            </Text>
            <Text>
              Sincerely,
              <br /> Minimal Team
            </Text>
          </Column>
        </Row>
        <Row style={{ marginBottom: "32px" }} width={270}>
          <Column>
            <Img
              width={270}
              src={`${baseUrl}/divider.png`}
              style={{ height: 11, objectFit: "cover" }}
            />
          </Column>
        </Row>
        <Row style={{ marginBottom: "32px" }} width={270}>
          {(
            [
              "linkedin",
              "skype",
              "medium",
              "twitter",
              "facebook",
            ] as SocialIconType[]
          ).map((type, i) => (
            <Column key={i} width={44} style={{ paddingRight: "20px" }}>
              <SocialIcon type={type} style={{ margin: 0 }} size={24} />
            </Column>
          ))}
          <Column width={50}></Column>
        </Row>
        <Row width={270} style={{ marginBottom: "30px" }}>
          <Column>
            <Text>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </Text>
            <Text>
              <a
                href="#"
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
                href="#"
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
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Privacy Policy
              </a>
            </Text>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default MinimalDiscoutCode;

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "20px",
  width: "310px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
