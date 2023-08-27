import { Container, Row, Column } from "@react-email/components";
import { SocialIcon, Text } from "@mailingui/components";

export default function RegisterAnAccount() {
  return (
    <div style={main}>
      <div className="px-10 py-4">
        <Container style={container}>
          <Row>
            <Column>
              <Text size="lg">You can register with:</Text>
            </Column>
          </Row>
          <Row style={{ transform: "translate(-14px, 0px)" }}>
            <Column>
              <SocialIcon type="github" size={32} href="#" />
            </Column>
            <Column>
              <SocialIcon type="twitter" size={32} href="#" />
            </Column>
            <Column width={32}>
              <SocialIcon type="google drive" size={32} href="#" />
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
  maxWidth: 330,
};
