import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { HeroSection, theme } from "@mailingui/components";

const SimpleHero = () => (
  <Html>
    <Head />
    <Preview>Simple Hero</Preview>
    <Body style={main}>
      <Container style={theme.container}>
        <HeroSection overlay={false} centered={false} />
      </Container>
    </Body>
  </Html>
);

export default SimpleHero;

const main = {
  backgroundColor: theme.backgroundColor,
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
