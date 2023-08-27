import { Column, Container, Img, Row } from "@react-email/components";
import React, { FC } from "react";
import { Text, SocialIcon, type SocialIconType } from "@mailingui/components";

type Tip = {
  title: string;
  description: string;
  imageUrl: string;
};

type TipsForTripsProps = {
  name?: string;
  tips?: Tip[];
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
            <Text style={{ fontSize: "38px", lineHeight: "40px" }}>
              3 Upcoming Events You Don&apos;t Want to Miss
            </Text>
          </Column>
        </Row>
        <Row style={{ marginBottom: "16px" }} width={270}>
          <Column>
            <Text>Dear {name},</Text>
            <Text>
              If you&apos;re looking to have some fun with us and your friends,
              here are 3 upcoming events you should definitely check out:
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
        {tips.map((tip, i) => (
          <Row key={i} style={{ marginBottom: "10px" }} width={270}>
            <Column>
              <Text style={{ fontWeight: 700 }}>{tip.title}</Text>
              <Text>{tip.description}</Text>
              <Img
                src={`${baseUrl}/${tip.imageUrl}`}
                width={270}
                style={{
                  borderRadius: "4px",
                  height: 180,
                  objectFit: "cover",
                }}
              />
            </Column>
          </Row>
        ))}
        <Row style={{ marginBottom: "16px" }} width={270}>
          <Column>
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

export default UpcomingEvents;

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "20px",
  width: "310px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
