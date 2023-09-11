import { Container, Row, Column } from "@react-email/components";
import { P, Img } from "@mailingui/components";
import { baseUrl } from "src/emails/minimal/shared/assets";

export default function RegisterAnAccount() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P style={{ marginBottom: "12px" }}>Register an account:</P>
        </Column>
      </Row>
      <Row>
        <Column>
          <Row>
            <Column width={36}>
              <Img compact width={24} src={`${baseUrl}/icons/github.png`} />
            </Column>
            <Column width={6} />
            <Column width="auto">
              <P compact>GitHub</P>
            </Column>
          </Row>
        </Column>
        <Column>
          <Row>
            <Column width={36}>
              <Img compact width={24} src={`${baseUrl}/icons/twitter.png`} />
            </Column>
            <Column width={6} />
            <Column width="auto">
              <P compact>Twitter</P>
            </Column>
          </Row>
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
