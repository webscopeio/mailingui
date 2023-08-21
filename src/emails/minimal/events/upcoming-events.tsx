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
import { Text, SocialIcon, type SocialIconType } from "@mailingui/components";

type Tip = {
  title: string;
  description: string;
  imageUrl: string;
};

type TipsForTripsProps = {
  name?: string;
  tips: Tip[];
};

const defaultTips: Tip[] = [
  {
    title: "1. Minimal Meetup",
    description:
      "At the Minimal Meetup we will be unveiling our new product and the people in attendance will get to see it first, so be sure not to miss it!",
    imageUrl: "/conference.jpg",
  },
  {
    title: "2. The Annual Minimal Conference",
    description:
      "Every year we host a conference that brings together the best minds in the industry to share their knowledge with you. This year we have an amazing line up of speakers, so be sure not to miss it!",
    imageUrl: "/annual-conference.png",
  },
  {
    title: "3. The Christmas Party",
    description:
      "As every year, please join us for our company Christmas party. We will have food, drinks, and a lot of fun! Come stop by at the 20th December at 7pm.",
    imageUrl: "/christmas-party.png",
  },
];

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const UpcomingEvents: FC<TipsForTripsProps> = ({
  name = "Jacob",
  tips = defaultTips,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Tips for Trips</Preview>
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
              3 Upcoming Events You Don&apos;t Want to Miss
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear {name},</Text>
            <Text>
              If you&apos;re looking to have some fun with us and your friends,
              here are 3 upcoming events you should definitely check out:
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          {tips.map((tip, i) => (
            <Row key={i} style={{ marginBottom: "32px" }}>
              <Text style={{ fontWeight: 700 }}>{tip.title}</Text>
              <Text>{tip.description}</Text>
              <Img
                src={`${baseUrl}/${tip.imageUrl}`}
                style={{ borderRadius: "16px" }}
              />
            </Row>
          ))}
          <Row style={{ marginBottom: "16px" }}>
            <Text>
              We hope we will see you on at least one of these events. We can
              assure you that you will have a wonderful time no matter which one
              you choose.
            </Text>
            <Text>
              If you have any further questions or need more advice, please
              don&apos;t hesitate to reach out to us.
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

export default UpcomingEvents;

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
