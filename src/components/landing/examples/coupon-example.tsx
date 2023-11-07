import { Container, Row, Column } from "@react-email/components";
import { P, HR, H2 } from "@mailingui/components";

const spacer = { width: "72px", borderWidth: "1.4px" };

export default function CouponExample() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <HR style={spacer} />
        </Column>
      </Row>
      <Row>
        <Column>
          <H2 style={{ color: "#E60073", margin: 0, marginBottom: "8px" }}>
            HAPPY20
          </H2>
          <P compact muted small>
            Use the coupon code at checkout to receive 20% off your total order.
          </P>
        </Column>
      </Row>
      <Row>
        <Column>
          <HR style={spacer} />
        </Column>
      </Row>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
};
