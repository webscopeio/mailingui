import { Container, Row, Column } from "@react-email/components";
import { SocialIcon, P } from "@mailingui/components";

export default function RegisterAnAccount() {
  return (
    <div style={main}>
      <div className="px-10 py-4">
        <Container style={container}>
          <Row>
            <P style={{ marginTop: 0 }}>Register an account:</P>
          </Row>
          <Row>
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
      </div>
    </div>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  borderRadius: "8px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color SocialIcon","Segoe UI SocialIcon"',
};

const container = {
  padding: "100px 0",
  maxWidth: 300,
};
