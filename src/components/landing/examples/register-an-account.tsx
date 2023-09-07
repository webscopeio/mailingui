import { Container, Row, Column } from "@react-email/components";
import { SocialIcon, P } from "@mailingui/components";

export default function RegisterAnAccount() {
  return (
    <Container style={container}>
      <Row style={row}>
        <Column>
          <P style={{marginBottom: "12px"}}>Register an account:</P>
        </Column>
      </Row>
      <Row style={row}>
        <Column>
          <Row>
            <Column width={32}>
              <SocialIcon
                type="github"
                href="#link"
                size={32}
                style={{ margin: 0 }}
              />
            </Column>
            <Column width={12} />
            <Column>GitHub</Column>
          </Row>
        </Column>
        <Column>
          <Row>
            <Column width={32}>
              <SocialIcon
                type="twitter"
                href="#link"
                size={32}
                style={{ margin: 0 }}
              />
            </Column>
            <Column width={12} />
            <Column>Twitter</Column>
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
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 6px",
};

