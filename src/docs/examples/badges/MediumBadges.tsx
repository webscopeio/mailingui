import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Head,
} from "@react-email/components";
import { Badge } from "@mailingui/components";

const MediumBadges = () => (
  <Html>
    <Head />
    <Preview>Medium Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Row>
            <Column>
              <Badge>Badge</Badge>
            </Column>
            <Column width={10} />
            <Column>
              <Badge variant="brand">Badge</Badge>
            </Column>
            <Column width={10} />
            <Column>
              <Badge variant="subtle">Badge</Badge>
            </Column>
            <Column width={10} />
            <Column>
              <Badge variant="outline">Badge</Badge>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default MediumBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
  maxWidth: 350,
};
