import { Container, Row, Column } from "@react-email/components";
import { P, HR } from "@mailingui/components";

export default function ConnectWithUs() {
  return (
    <Container style={container}>
      <P compact>
        Sincerely,
        <br /> Minimal Team
      </P>
      <HR style={{ margin: "12px 0" }} />
      <Row>
        <Column>
          <P compact>Connect with us</P>
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
