import { Container, Row, Column } from "@react-email/components";
import { P, HR, Img } from "@mailingui/components";
import { baseUrl } from "src/emails/minimal/shared/assets";

export default function ConnectWithUs() {
  return (
    <Container style={container}>
      <P muted compact>
        Sincerely,
        <br /> Minimal Team
      </P>
      <HR style={{ margin: "12px 0" }} />
      <Row>
        <Column width="auto">
          <P muted compact>
            Connect with us
          </P>
        </Column>
        <Column width={42}>
          <Img compact width={24} src={`${baseUrl}/icons/github.png`} />
        </Column>
        <Column width={42}>
          <Img compact width={24} src={`${baseUrl}/icons/linkedin.png`} />
        </Column>
        <Column width={24}>
          <Img compact width={24} src={`${baseUrl}/icons/twitter.png`} />
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
