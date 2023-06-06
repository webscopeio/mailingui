import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Badge } from "@mailingui/components";

const MediumBadges = () => (
  <Html>
    <Head />
    <Preview>Medium Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Badge variant="default" size="md" noBorder>
          Badge
        </Badge>
        <span style={{ padding: 10 }} />
        <Badge variant="danger" size="md" noBorder>
          Badge
        </Badge>
        <span style={{ padding: 10 }} />
        <Badge variant="success" size="md" noBorder>
          Badge
        </Badge>
        <span style={{ padding: 10 }} />
        <Badge variant="info" size="md" noBorder>
          Badge
        </Badge>
        <span style={{ padding: 10 }} />
        <Badge variant="warning" size="md" noBorder>
          Badge
        </Badge>
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
  width: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};
