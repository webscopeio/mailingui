import { Container, Row, Column } from "@react-email/components";
import { Divider, SocialIcon, Text } from "@mailingui/components";

export default function ConnectWithUs() {
  return (
    <div style={main}>
      <div className="px-10 py-4">
        <Container style={container}>
          <Divider />
          <Row>
            <Column>
              <Text style={{ textAlign: "left" }}>Connect with us</Text>
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
