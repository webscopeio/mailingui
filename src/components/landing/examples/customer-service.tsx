import { Container, Row, Column } from "@react-email/components";
import { P } from "@mailingui/components";

export default function CustomerService() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P compact style={{ marginRight: "12px" }}>Were you satisfied with your order?</P>
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
