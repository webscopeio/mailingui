import { Container, Row, Column } from "@react-email/components";
import { P, Emoji } from "@mailingui/components";

export default function CustomerService() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P compact>Were you satisfied?</P>
        </Column>
        <Column style={{ paddingRight: "8px" }}>
          <Emoji type="thumbs-up" href="#link-ok" bg />
        </Column>
        <Column>
          <Emoji type="thumbs-down" href="#link-nok" bg />
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
