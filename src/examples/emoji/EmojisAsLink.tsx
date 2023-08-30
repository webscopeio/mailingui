import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { Emoji, P } from "@mailingui/components";

export default function EmojisAsLink() {
  return (
    <Html>
      <Head />
      <Preview>Emojis As Link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <P>
                Were you satisfied with our Customer Care Service?
              </P>
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
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "130px 0",
  textAlign: "center" as const,
  maxWidth: 400,
};
