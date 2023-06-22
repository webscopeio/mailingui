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
import { getCssText } from "@mailingui/themes";

const MediumBadges = () => (
  <Html>
    <Head>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: getCssText(),
        }}
      />
    </Head>
    <Preview>Medium Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge>Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="primary">Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="secondary">Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="success">Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="warning">Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge variant="danger">Badge</Badge>
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
