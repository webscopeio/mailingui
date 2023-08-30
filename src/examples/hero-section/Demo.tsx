import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { HeroSection } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
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
            overlay={false}
            centered={false}
            bgImg="https://www.linkpicture.com/q/new-company-office-hero-placeholder.png"
            logoSrc="https://www.linkpicture.com/q/company-placeholder-logo-hero.png"
          />
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
