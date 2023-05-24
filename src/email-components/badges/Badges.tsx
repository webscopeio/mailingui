import { Body, Container, Head, Html, Preview } from "@react-email/components";
import * as React from "react";
import Badge from "../../email-templates/default/components/Badge";

export const SmallBadgesPage = () => (
  <Html>
    <Head />
    <Preview>Small Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <span style={{ padding: 10 }}>
          <Badge variant="default" size="sm">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="danger" size="sm">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="success" size="sm">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="info" size="sm">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="warning" size="sm">
            Badge
          </Badge>
        </span>
      </Container>
      <Container style={container}>
        <span style={{ padding: 10 }}>
          <Badge variant="default" size="md">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="danger" size="md">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="success" size="md">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="info" size="md">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="warning" size="md">
            Badge
          </Badge>
        </span>
      </Container>
      <Container style={container}>
        <span style={{ padding: 10 }}>
          <Badge variant="default" size="lg">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="danger" size="lg">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="success" size="lg">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="info" size="lg">
            Badge
          </Badge>
        </span>
        <span style={{ padding: 10 }}>
          <Badge variant="warning" size="lg">
            Badge
          </Badge>
        </span>
      </Container>
    </Body>
  </Html>
);

export default SmallBadgesPage;

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
