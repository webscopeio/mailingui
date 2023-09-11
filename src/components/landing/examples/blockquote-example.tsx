import { Container } from "@react-email/components";
import { Blockquote } from "@mailingui/components";

export default function BlockquoteExample() {
  return (
    <Container style={container}>
      <Blockquote compact>
        &quot;After all&quot; he said, &quot;everyone enjoys a good joke,
        right?&quot;
      </Blockquote>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
};