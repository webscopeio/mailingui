import { Column, Container, Img, Row } from "@react-email/components";
import React, { FC } from "react";
import {
  Text,
  SocialIcon,
  type SocialIconType,
  Emoji,
} from "@mailingui/components";

type ProductReviewProps = {
  name?: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const ProductReview: FC<ProductReviewProps> = ({ name = "Jacob" }) => {
  return (
    <Container style={container} width={310}>
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
          <Text style={{ fontSize: "38px", lineHeight: "40px" }}>
            Tell Us What You Think
          </Text>
        </Column>
      </Row>
      <Row style={{ marginBottom: "16px" }} width={270}>
        <Column>
          <Text>Dear {name},</Text>
          <Text>
            We hope this email finds you well. We wanted to take a moment to
            check in with you and ask about your experience with the products
            you purchased from us.
          </Text>
          <Text>
            At Viola Studio, we are committed to providing our customers with
            the best possible experience, and we want to ensure that we are
            meeting that goal. We would be grateful if you could take a few
            minutes to share your thoughts on your experience with us.
          </Text>
        </Column>
      </Row>
      <Row style={{ marginBottom: "25px" }} width={270}>
        <Column>
          <Img
            width={270}
            src={`${baseUrl}/divider.png`}
            style={{ height: 11, objectFit: "cover" }}
          />
        </Column>
      </Row>
      <Row style={{ marginBottom: "5px", textAlign: "center" }} width={270}>
        <Column width={54}>
          <Emoji
            type="heart-eyes-face"
            href="#"
            bg
            small
            style={{ marginLeft: "11px" }}
          />
          <Text size="xs">Excellent</Text>
        </Column>
        <Column width={54}>
          <Emoji
            type="smiling-face"
            href="#"
            bg
            small
            style={{ marginLeft: "11px" }}
          />
          <Text size="xs">Good</Text>
        </Column>
        <Column width={54}>
          <Emoji
            type="neutral-face"
            href="#"
            bg
            small
            style={{ marginLeft: "11px" }}
          />
          <Text size="xs">Neutral</Text>
        </Column>
        <Column width={54}>
          <Emoji
            type="sad-face"
            href="#"
            bg
            small
            style={{ marginLeft: "11px" }}
          />
          <Text size="xs">Bad</Text>
        </Column>
        <Column width={54}>
          <Emoji
            type="confounded-face"
            href="#"
            bg
            small
            style={{ marginLeft: "11px" }}
          />
          <Text size="xs">Horrible</Text>
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
      <Row style={{ marginBottom: "16px" }} width={270}>
        <Column>
          <Text>
            Your feedback is important to us, and it will help us identify areas
            where we can improve and better serve our customers. We value your
            opinion, and we would appreciate any suggestions or comments that
            you may have.
          </Text>
          <Text>
            Thank you for your time and consideration, and we look forward to
            hearing from you soon.
          </Text>
          <Text>
            Best regards,
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
            © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois 85486
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
  );
};

export default ProductReview;

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "20px",
  width: "310px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
