import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { Emoji } from "@mailingui/components";

export default function EmojisWithBackground() {
  return (
    <Html>
      <Head />
      <Preview>Emojis With Background</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column style={{ padding: "5px" }}>
              <Emoji type="grinning-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="grinning-face-with-sweat" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="face-joy-tears" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="slightly-smiling-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="heart-eyes-face" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <Emoji type="enraged-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sad-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sobbing-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="star-struck-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sunglasses-face" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <Emoji type="partying-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sneezing-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="cold-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="hot-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="smiling-face" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <Emoji type="shushing-face" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="waving-hand" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="handshake" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="heart-hands" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sleeping-face" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sun-behind-rain-cloud" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sun-behind-small-cloud" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="snowflake" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="cloud-with-lightning-and-rain" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sun" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <Emoji type="folded-hands" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="thumbs-up" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="thumbs-down" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="red-heart" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="star" bg />
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "55px 0",
  textAlign: "center" as const,
  maxWidth: 400,
};
