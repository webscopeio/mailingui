import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Section,
  Head,
} from "@react-email/components";
import { Badge } from "@mailingui/components";

const SmallBadges = () => (
  <Html>
    <Head />
    <Preview>Small Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge size="sm">Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="brand">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="subtle">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="outline">
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
