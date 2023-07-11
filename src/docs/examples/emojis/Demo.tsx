import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Emoji } from "@mailingui/components";

export default function AllEmojis() {
  return (
    <Html>
      <Head />
      <Preview>All Emojis</Preview>
      <Body style={main}>
        <Container style={container}>
          <Emoji type="grinning-face" />
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  paddingTop: "120px",
  textAlign: "center" as const,
  width: "72px",
};
