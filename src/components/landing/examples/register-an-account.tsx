import { Container, Row, Column } from "@react-email/components";
import { SocialIcon, Text } from "@mailingui/components";

export default function RegisterAnAccount() {
  return (
    <div style={main}>
      <div className="px-10 py-4">
        <Container style={container}>
          <Row>
            <Text size="lg">Register with:</Text>
          </Row>
          <Row style={{ transform: "translate(-14px, 0px)" }}>
            <Column>
              <SocialIcon type="github" size={32} />
            </Column>
            <Column>
              <SocialIcon type="twitter" size={32} />
            </Column>
            <Column>
              <SocialIcon type="google drive" size={32} />
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
  borderRadius: "16px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color SocialIcon","Segoe UI SocialIcon"',
};

const container = {
  padding: "100px 0",
  maxWidth: 330,
};
