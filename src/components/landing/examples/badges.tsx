import * as React from "react";
import { Container, Section, Row, Column } from "@react-email/components";
import { Badge } from "@mailingui/components";

const DotBadges = () => (
  <div style={main}>
    <div className="px-2 py-4">
      <Container style={container}>
        <Section style={{ textAlign: "center" as const }}>
          <Row>
            <Column>
              <Badge dot>Badge</Badge>
            </Column>
            <Column>
              <Badge variant="subtle" dot>
                Badge
              </Badge>
            </Column>
            <Column>
              <Badge variant="outline" dot>
                Badge
              </Badge>
            </Column>
          </Row>
        </Section>
      </Container>
    </div>
  </div>
);

export default DotBadges;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  borderRadius: "8px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color SocialIcon","Segoe UI SocialIcon"',
};

const container = {
  padding: "100px 0",
  maxWidth: 300,
};
