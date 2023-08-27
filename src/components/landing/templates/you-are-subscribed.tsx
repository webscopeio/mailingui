import { Column, Container, Img, Row } from "@react-email/components";
import React, { FC } from "react";
import {
  Text,
  SocialIcon,
  type SocialIconType,
  BulletList,
  BulletListItem,
  Button,
} from "@mailingui/components";

type SubscriptionSuccessProps = {
  link?: string;
  items?: string[];
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const SubscriptionSuccess: FC<SubscriptionSuccessProps> = ({
  link = "#",
  items = [
    "A recap of our latest product launch and customer feedback",
    "A sneak peek of our upcoming events and promotions",
    "An inside look at our team and company culture",
    "Tips and advice related to our industry or area of expertise",
  ],
}) => {
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
      <Row style={{ marginBottom: "10px" }} width={270}>
        <Column>
          <Img
            width={270}
            src={`${baseUrl}/divider.png`}
            style={{ objectFit: "cover", height: 11 }}
          />
        </Column>
      </Row>
      <Row width={270}>
        <Column>
          <Text style={{ fontSize: "38px", lineHeight: "40px" }}>
            You Are Subscribed!
          </Text>
        </Column>
      </Row>
      <Row style={{ marginBottom: "10px" }} width={270}>
        <Column>
          <Text>Dear Subscriber,</Text>
          <Text>
            you are successfully signed up for our newsletter. Expect a weekly
            email about all the amazing stuff happening withing the Minimal
            ecosystem.
          </Text>
          <Text>
            As a valued member of our community, we want to keep you informed
            about our recent activities and upcoming plans, so we are also
            sending the latest issue of our newsletter in this email.
          </Text>
        </Column>
      </Row>
      <Row width={270} style={{ marginBottom: "10px" }}>
        <Column>
          <Img
            src={`${baseUrl}/phone-newsletter.png`}
            width={270}
            style={{
              borderRadius: "4px",
              height: 180,
              objectFit: "cover",
            }}
          />
        </Column>
      </Row>
      <Row style={{ marginBottom: "32px" }} width={270}>
        <Column>
          <Text style={{ fontWeight: 700 }}>
            In this edition, you&apos;ll find:
          </Text>
          <BulletList type="unordered">
            {items.map((item, i) => (
              <BulletListItem key={i}>{item}</BulletListItem>
            ))}
          </BulletList>
        </Column>
      </Row>
      <Row style={{ marginBottom: "20px" }} width={270}>
        <Column>
          <Button href={link} width={270} height={56} backgroundColor="#000000">
            Read more
          </Button>
        </Column>
      </Row>
      <Row style={{ marginBottom: "16px" }} width={270}>
        <Column>
          <Text>
            We are committed to providing you with valuable content and insights
            that will help you stay informed and engaged. Thank you for your
            continued support and loyalty.
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

export default SubscriptionSuccess;

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "20px",
  width: "310px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
