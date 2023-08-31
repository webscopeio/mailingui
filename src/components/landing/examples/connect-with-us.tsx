import { Container, Row, Column } from "@react-email/components";
import { Divider, SocialIcon, P } from "@mailingui/components";

export default function ConnectWithUs() {
  return (
    <Container style={container}>
      <P compact>
        Sincerely,
        <br /> Minimal Team
      </P>
      <Divider />
      <Row>
        <Column>
          <P compact>Connect with us</P>
        </Column>
        <Column width={44}>
          <SocialIcon type="telegram" href="#" />
        </Column>
        <Column width={44}>
          <SocialIcon type="twitter" href="#" />
        </Column>
        <Column width={44}>
          <SocialIcon type="whatsapp" href="#" />
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
