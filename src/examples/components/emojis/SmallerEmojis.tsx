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
              <Emoji type="grinning-face" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="grinning-face-with-sweat" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="face-joy-tears" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="slightly-smiling-face" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="heart-eyes-face" size={32} />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <Emoji type="enraged-face" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sad-face" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sobbing-face" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="star-struck-face" size={32} />
            </Column>
            <Column style={{ padding: "5px" }}>
              <Emoji type="sunglasses-face" size={32} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="partying-face" size={32} />
            </Column>
            <Column>
              <Emoji type="sneezing-face" size={32} />
            </Column>
            <Column>
              <Emoji type="cold-face" size={32} />
            </Column>
            <Column>
              <Emoji type="hot-face" size={32} />
            </Column>
            <Column>
              <Emoji type="smiling-face" size={32} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="shushing-face" size={32} />
            </Column>
            <Column>
              <Emoji type="waving-hand" size={32} />
            </Column>
            <Column>
              <Emoji type="handshake" size={32} />
            </Column>
            <Column>
              <Emoji type="heart-hands" size={32} />
            </Column>
            <Column>
              <Emoji type="sleeping-face" size={32} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="sun-behind-rain-cloud" size={32} />
            </Column>
            <Column>
              <Emoji type="sun-behind-small-cloud" size={32} />
            </Column>
            <Column>
              <Emoji type="snowflake" size={32} />
            </Column>
            <Column>
              <Emoji type="cloud-with-lightning-and-rain" size={32} />
            </Column>
            <Column>
              <Emoji type="sun" size={32} />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="folded-hands" size={32} />
            </Column>
            <Column>
              <Emoji type="thumbs-up" size={32} />
            </Column>
            <Column>
              <Emoji type="thumbs-down" size={32} />
            </Column>
            <Column>
              <Emoji type="red-heart" size={32} />
            </Column>
            <Column>
              <Emoji type="star" size={32} />
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
  maxWidth: 350,
};
