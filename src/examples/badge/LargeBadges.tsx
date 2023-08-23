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

const LargeBadges = () => (
  <Html>
    <Head />
    <Preview>Large Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge size="lg" dot>
            Badge
          </Badge>
          <span style={{ padding: 5 }} />
          <Badge variant="brand" size="lg" dot>
            Badge
          </Badge>
          <span style={{ padding: 5 }} />
          <Badge variant="subtle" size="lg" dot>
            Badge
          </Badge>
          <span style={{ padding: 5 }} />
          <Badge variant="outline" size="lg" dot>
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
