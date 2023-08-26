import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { SocialIcon, Text } from "@mailingui/components";

export default function RegisterAnAccount() {
  return (
    <div style={main}>
      <div className="py-[100px]">
        <Container style={container}>
          <Row>
            <Text size="lg">
              Register an account with us using the following providers:
            </Text>
          </Row>
          <Row>
            <Column>
              <Row>
                <Column width={44}>
                  <SocialIcon type="github" size={32} />
                </Column>
                <Column width={20} />
                <Column>GitHub</Column>
              </Row>
            </Column>
            <Column>
              <Row>
                <Column width={44}>
                  <SocialIcon type="twitter" size={32} />
                </Column>
                <Column width={20} />
                <Column>Twitter</Column>
              </Row>
            </Column>
            <Column>
              <Row>
                <Column width={44}>
                  <SocialIcon type="google drive" size={32} />
                </Column>
                <Column width={20} />
                <Column>Google</Column>
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
  height: "300px",
  borderRadius: "16px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color SocialIcon","Segoe UI SocialIcon"',
};

const container = {
  padding: "100px 0",
  maxWidth: 480,
};
