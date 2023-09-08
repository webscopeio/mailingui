import { Container, Row, Column } from "@react-email/components";
import { P, Emoji } from "@mailingui/components";

export default function CustomerService() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P compact style={{ marginRight: "12px" }}>Were you satisfied with your order?</P>
        </Column>
        <Column width={52} style={{ paddingRight: "8px" }}>
          <Emoji
            type="thumbs-up"
            href="#link-ok"
            bg
            style={{ width: "44px", height: "44px" }}
          />
        </Column>
        <Column width={44}>
          <Emoji
            type="thumbs-down"
            href="#link-nok"
            bg
            style={{ width: "44px", height: "44px" }}
          />
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
