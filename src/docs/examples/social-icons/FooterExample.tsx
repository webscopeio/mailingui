import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { Divider, SocialIcon, Text } from "@mailingui/components";

export default function AllSocialIcons() {
  return (
    <Html>
      <Head />
      <Preview>All Social Icons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Divider />
          <Row>
            <Column>
              <Text style={{ textAlign: "left" }}>Connect with us</Text>
            </Column>
            <Column width={44}>
              <SocialIcon type="telegram" href="#link-to-telegram" />
            </Column>
            <Column width={44}>
              <SocialIcon type="twitter" href="#link-to-twitter" />
            </Column>
            <Column width={44}>
              <SocialIcon type="whatsapp" href="#link-to-whatsapp" />
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color SocialIcon","Segoe UI SocialIcon"',
};

const container = {
  padding: "200px 0 20px 0",
  textAlign: "center" as const,
  maxWidth: 580,
};
