import { Body, Container, Html } from "@react-email/components";
import { SocialIcon } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <SocialIcon type="slack" />
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
  padding: "140px 0",
  textAlign: "center" as const,
  width: "52px",
};
