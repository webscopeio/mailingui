import * as React from "react";
import { Container, Row, Column } from "@react-email/components";
import { Badge, H1 } from "@mailingui/components";

export default function DotBadges() {
  return (
    <Container style={container}>
      <Row style={row}>
        <Column>
          <H1>Series B</H1>
        </Column>
      </Row>
      <Row>
        <Column>
          <Badge variant="outline" dot>
            New
          </Badge>{" "}
          <Badge variant="subtle" dot>
            React
          </Badge>
        </Column>
      </Row>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 16px",
};
