import * as React from "react";
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
import {
  SocialIcon,
  type SocialIconType,
  Button,
  P,
  Link,
  H3,
  H1,
} from "@mailingui/components";

type SubscriptionSuccessProps = {
  subscriberName: string;
  company: string;
  link: string;
  items: string[];
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const SubscriptionSuccess: React.FC<SubscriptionSuccessProps> = ({
  subscriberName = "Jacob",
  company = "Minimal",
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
          <Row style={row}>
            <Column width={46} height={34}>
              <Img src={`${baseUrl}/star.png`} alt="Star" />
            </Column>
            <Column>
              <H3 compact>MINIMAL</H3>
            </Column>
          </Row>
          <Row style={row}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
            <H1>You Are Subscribed!</H1>
            <P>Dear, {subscriberName}:</P>
            <P>
              You are successfully signed up for our newsletter. Expect a weekly
              email about all the amazing stuff happening withing the {company}
              ecosystem.
            </P>
            <Img src={`${baseUrl}/phone-newsletter.png`} width={520} />
          </Row>
          <Row style={row}>
            <P compact>
              <b>In this edition, you&apos;ll find:</b>
            </P>
            {items.map((item, i) => (
              <P compact key={i}>
                {item}
              </P>
            ))}
          </Row>
          <Row style={row}>
            <Button
              href={link}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Read more
            </Button>
            <P>
              We are committed to providing you with valuable content and
              insights that will help you stay informed and engaged. Thank you
              for your continued support and loyalty.
            </P>
            <P>
              Sincerely,
              <br /> Minimal Team
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
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
          <Row style={row}>
            <P compact muted>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </P>
            <P compact muted>
              <Link muted href="#unsubscribe">
                Unsubscribe
              </Link>{" "}
              ·{" "}
              <Link muted href="#tos">
                Terms of Use
              </Link>{" "}
              ·{" "}
              <Link muted href="#pp">
                Privacy Policy
              </Link>
            </P>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default SubscriptionSuccess;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "60px 40px 40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 24px",
};
