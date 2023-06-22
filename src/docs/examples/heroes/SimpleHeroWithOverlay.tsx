import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { HeroSection } from "@mailingui/components";

const SimpleHero = () => (
  <Html>
    <Head />
    <Preview>Simple Hero</Preview>
    <Body style={main}>
      <Container
        style={{
          borderRadius: "10px 10px 0 0",
          maxWidth: "600px",
          margin: "0 auto",
          padding: 0,
          backgroundColor: "black",
        }}
      >
        <HeroSection
          overlay={true}
          centered={false}
          overlayPadding="40px 40px 150px 40px"
        />
      </Container>
    </Body>
  </Html>
);

export default SimpleHero;

const main = {
  backgroundColor: "#fff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
