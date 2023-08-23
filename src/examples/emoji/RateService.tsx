import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { Emoji, Text } from "@mailingui/components";

export default function EmojisAsLink() {
  return (
    <Html>
      <Head />
      <Preview>Emojis As Link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <Text style={{ textAlign: "center", paddingBottom: "15px" }}>
                How would you rate your stay with us?
              </Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Emoji type="confounded-face" href="#rate-1" bg />
            </Column>
            <Column>
              <Emoji type="sad-face" href="#rate-2" bg />
            </Column>
            <Column>
              <Emoji type="neutral-face" href="#rate-3" bg />
            </Column>
            <Column>
              <Emoji type="smiling-face" href="#rate-4" bg />
            </Column>
            <Column>
              <Emoji type="heart-eyes-face" href="#rate-5" bg />
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
  padding: "70px 0",
  textAlign: "center" as const,
  maxWidth: 400,
};
