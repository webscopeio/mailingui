import { Container, Row, Column } from "@react-email/components";
import { P } from "@mailingui/components";

export default function RateYourExperience() {
  return (
    <Container style={container}>
      <Row style={row}>
        <Column>
          <P style={{marginBottom: "12px"}}>Rate your experience:</P>
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
  margin: "0 0 6px",
};
