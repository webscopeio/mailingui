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
import { getCssText } from "@mailingui/utils";

const PillBadges = () => (
  <Html>
    <Head>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: getCssText(),
        }}
      />
    </Head>
    <Preview>Pill Badges</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Badge pill>Badge</Badge>
          <span style={{ padding: 10 }} />
          <Badge pill variant="primary">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge pill variant="secondary">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge pill variant="success">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge pill variant="warning">
            Badge
          </Badge>
          <span style={{ padding: 10 }} />
          <Badge pill variant="danger">
            Badge
          </Badge>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default PillBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
};
