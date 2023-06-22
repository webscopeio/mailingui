import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Section,
} from "@react-email/components";
import { Badge, Head } from "@mailingui/components";

const MediumBadges = () => (
  <Html>
    <Head />
    <Preview>Medium Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge noBorder>Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="primary">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="secondary">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="success">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="warning">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge noBorder variant="danger">
            Badge
          </Badge>
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
};
