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

export default function AllEmojis() {
  return (
    <Html>
      <Head />
      <Preview>All Emojis</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <Emoji type="grinning-face" />
            </Column>
            <Column>
              <Emoji type="grinning-face-with-sweat" />
            </Column>
            <Column>
              <Emoji type="face-joy-tears" />
            </Column>
            <Column>
              <Emoji type="slightly-smiling-face" />
            </Column>
            <Column>
              <Emoji type="heart-eyes-face" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="enraged-face" />
            </Column>
            <Column>
              <Emoji type="sad-face" />
            </Column>
            <Column>
              <Emoji type="sobbing-face" />
            </Column>
            <Column>
              <Emoji type="star-struck-face" />
            </Column>
            <Column>
              <Emoji type="sunglasses-face" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="partying-face" />
            </Column>
            <Column>
              <Emoji type="sneezing-face" />
            </Column>
            <Column>
              <Emoji type="cold-face" />
            </Column>
            <Column>
              <Emoji type="hot-face" />
            </Column>
            <Column>
              <Emoji type="smiling-face" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="shushing-face" />
            </Column>
            <Column>
              <Emoji type="waving-hand" />
            </Column>
            <Column>
              <Emoji type="handshake" />
            </Column>
            <Column>
              <Emoji type="heart-hands" />
            </Column>
            <Column>
              <Emoji type="sleeping-face" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="sun-behind-rain-cloud" />
            </Column>
            <Column>
              <Emoji type="sun-behind-small-cloud" />
            </Column>
            <Column>
              <Emoji type="snowflake" />
            </Column>
            <Column>
              <Emoji type="cloud-with-lightning-and-rain" />
            </Column>
            <Column>
              <Emoji type="sun" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="folded-hands" />
            </Column>
            <Column>
              <Emoji type="thumbs-up" />
            </Column>
            <Column>
              <Emoji type="thumbs-down" />
            </Column>
            <Column>
              <Emoji type="red-heart" />
            </Column>
            <Column>
              <Emoji type="star" />
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
