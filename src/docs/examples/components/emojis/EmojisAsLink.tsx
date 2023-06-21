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
              <Text style={{ textAlign: "left" }}>
                Were you satisfied with our Customer Care Service?
              </Text>
            </Column>
            <Column style={{ paddingRight: "10px" }}>
              <Emoji type="thumbs-up" href="#link-ok" bg />
            </Column>
            <Column>
              <Emoji type="thumbs-down" href="#link-nok" bg />
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
  padding: "130px 0",
  textAlign: "center" as const,
  maxWidth: 400,
};
