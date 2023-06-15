import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { SocialIcon } from "@mailingui/components";

export default function AllSocialIcons() {
  return (
    <Html>
      <Head />
      <Preview>All Social Icons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <SocialIcon type="tiktok" />
            </Column>
            <Column>
              <SocialIcon type="tinder" />
            </Column>
            <Column>
              <SocialIcon type="airbnb" />
            </Column>
            <Column>
              <SocialIcon type="quora" />
            </Column>
            <Column>
              <SocialIcon type="9gag" />
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
  padding: "55px 0",
  textAlign: "center" as const,
  maxWidth: 400,
};
