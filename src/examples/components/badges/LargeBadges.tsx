import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from "@react-email/components";
import { Badge } from "@mailingui/components";

const LargeBadges = () => (
  <Html>
    <Head />
    <Preview>Large Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge variant="default" size="lg">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="danger" size="lg">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="success" size="lg">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="info" size="lg">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="warning" size="lg">
            Badge
          </Badge>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default LargeBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
};
