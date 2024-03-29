import { Container } from "@react-email/components";
import { P, Code } from "@mailingui/components";

export default function InlineCodeExample() {
  return (
    <Container style={container}>
      <P compact>
        Run{" "}
        <Code style={{ fontWeight: "bold" }}>
          npx @mailingui/cli
        </Code>
      </P>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
};
