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

const SmallBadges = () => (
  <Html>
    <Head>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: getCssText(),
        }}
      />
    </Head>
    <Preview>Small Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge size="sm">Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="primary">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="secondary">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="success">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="warning">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge size="sm" variant="danger">
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
