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
      <Preview>Smaller Emojis</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <Emoji type="partying-face" small />
            </Column>
            <Column>
              <Emoji type="sneezing-face" small />
            </Column>
            <Column>
              <Emoji type="cold-face" small />
            </Column>
            <Column>
              <Emoji type="hot-face" small />
            </Column>
            <Column>
              <Emoji type="smiling-face" small />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="shushing-face" small />
            </Column>
            <Column>
              <Emoji type="waving-hand" small />
            </Column>
            <Column>
              <Emoji type="handshake" small />
            </Column>
            <Column>
              <Emoji type="heart-hands" small />
            </Column>
            <Column>
              <Emoji type="sleeping-face" small />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="sun-behind-rain-cloud" small />
            </Column>
            <Column>
              <Emoji type="sun-behind-small-cloud" small />
            </Column>
            <Column>
              <Emoji type="snowflake" small />
            </Column>
            <Column>
              <Emoji type="cloud-with-lightning-and-rain" small />
            </Column>
            <Column>
              <Emoji type="sun" small />
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="folded-hands" small />
            </Column>
            <Column>
              <Emoji type="thumbs-up" small />
            </Column>
            <Column>
              <Emoji type="thumbs-down" small />
            </Column>
            <Column>
              <Emoji type="red-heart" small />
            </Column>
            <Column>
              <Emoji type="star" small />
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
  padding: "45px 0",
  textAlign: "center" as const,
  maxWidth: 350,
};
