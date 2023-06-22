import {
  Body,
  Column,
  Container,
  Html,
  Preview,
  Img,
  Row,
} from "@react-email/components";
import React, { FC } from "react";
import {
  Text,
  SocialIcon,
  type SocialIconType,
  Head,
} from "@mailingui/components";

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
    title: "1. Japan",
    description:
      "Japan is a country of contrasts, where ancient traditions and modern technology coexist. From exploring the bustling city of Tokyo to soaking in hot springs and admiring the cherry blossoms, Japan has something for everyone.",
    imageUrl: "/japan-trip-tip.png",
  },
  {
    title: "2. Italy",
    description:
      "Italy is a country of romance, art, and exquisite cuisine. Whether you're strolling through the streets of Rome, admiring the art in Florence, or savoring the delicious food in Naples, Italy is a destination that should be on everyone's bucket list.",
    imageUrl: "/italy-trip-tip.png",
  },
  {
    title: "3. Iceland",
    description:
      "Iceland is a country of otherworldly landscapes, with hot springs, glaciers, and geysers. You can hike on glaciers, swim in hot springs, and chase the Northern Lights in this unique destination.",
    imageUrl: "/iceland-trip-tip.png",
  },
];

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const TipsForTrips: FC<TipsForTripsProps> = ({
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
              3 Countries to Consider for Your Next Trip
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text>Dear {name},</Text>
            <Text>
              If you&apos;re looking for inspiration for your next trip, I
              wanted to suggest five countries that offer a unique and memorable
              travel experience:
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
              I hope these suggestions inspire you to plan your next trip. Each
              of these countries offers something unique and special, and
              I&apos;m sure you&apos;ll have a wonderful time no matter which
              one you choose.
            </Text>
            <Text>
              If you have any further questions or need more advice, please
              don&apos;t hesitate to reach out to me.
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

export default TipsForTrips;

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
