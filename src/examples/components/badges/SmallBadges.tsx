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

const SmallBadges = () => (
  <Html>
    <Head />
    <Preview>Small Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge variant="default" size="sm">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="danger" size="sm">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="success" size="sm">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="info" size="sm">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="warning" size="sm">
            Badge
          </Badge>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default SmallBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
};
