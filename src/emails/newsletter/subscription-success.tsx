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
  BulletList,
  BulletListItem,
  Button,
} from "@mailingui/components";

type SubscriptionSuccessProps = {
  link: string;
  items: string[];
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const SubscriptionSuccess: FC<SubscriptionSuccessProps> = ({
  link = "https://google.com",
  items = [
    "A recap of our latest product launch and customer feedback",
    "A sneak peek of our upcoming events and promotions",
    "An inside look at our team and company culture",
    "Tips and advice related to our industry or area of expertise",
  ],
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - New issue of our newsletter</Preview>
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
              You Are Subscribed!
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
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
          </Row>
          <Row>
            <Img
              src={`${baseUrl}/phone-newsletter.png`}
              width={520}
              style={{ marginBottom: "24px", borderRadius: "4px" }}
            />
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text style={{ fontWeight: 700 }}>
              In this edition, you&apos;ll find:
            </Text>
            <BulletList type="unordered">
              {items.map((item, i) => (
                <BulletListItem key={i}>{item}</BulletListItem>
              ))}
            </BulletList>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Button
              href={link}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Read more
            </Button>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              We are committed to providing you with valuable content and
              insights that will help you stay informed and engaged. Thank you
              for your continued support and loyalty.
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

export default SubscriptionSuccess;

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
