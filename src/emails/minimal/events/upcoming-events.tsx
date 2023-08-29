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
  SocialIcon,
  type SocialIconType,
  P,
  Link,
  H3,
  H1,
  H4,
} from "@mailingui/components";

type Tip = {
  title: string;
  description: string;
  imageUrl: string;
};

type TipsForTripsProps = {
  guestName?: string;
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
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mailingui.com"
}/static/minimal-theme`;

export const UpcomingEvents: FC<TipsForTripsProps> = ({
  guestName = "Jacob",
  tips = defaultTips,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Tips for Trips</Preview>
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
            <H1>3 Upcoming Events You Don&apos;t Want to Miss</H1>
            <P>Dear, {guestName}:</P>
            <P>
              If you&apos;re looking to have some fun with us and your friends,
              here are 3 upcoming events you should definitely check out:
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          {tips.map((tip, i) => (
            <Row key={i} style={row}>
              <H4 style={{ marginTop: "48px", fontWeight: 700 }}>{tip.title}</H4>
              <P>{tip.description}</P>
              <Img
                src={`${baseUrl}/${tip.imageUrl}`}
                style={{ borderRadius: "16px" }}
              />
            </Row>
          ))}
          <Row style={row}>
            <P>
              If you have any further questions or need more advice, please
              don&apos;t hesitate to reach out to us.
            </P>
            <P>We hope to see you soon!</P>
            <P>
              Best regards,
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
          <Row>
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
            <P small muted>
              Disclaimer: These suggestions have been provided based on the highest rated events held in your area. Please reply to this email if you would like to update your location.
            </P>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default UpcomingEvents;

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
