import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Section,
} from "@react-email/components";
import { Badge } from "@mailingui/components";

const DotBadges = () => (
  <Html>
    <Head />
    <Preview>Medium Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge variant="default" size="md" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="danger" size="md" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="success" size="md" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="info" size="md" dot>
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="warning" size="md" dot>
            Badge
          </Badge>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default DotBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
};
