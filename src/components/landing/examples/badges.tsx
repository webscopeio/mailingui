import { Container, Row, Column } from "@react-email/components";
import { H2, Badge } from "@mailingui/components";

export default function DotBadges() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <H2 compact style={{ fontWeight: 600, marginBottom: "12px" }}>
            v1.0 Release
          </H2>
          <Badge compact style={{ marginRight: "6px" }}>
            New
          </Badge>
          <Badge compact secondary>
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
  margin: "12px 0",
};
