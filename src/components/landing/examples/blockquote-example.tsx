import { Container } from "@react-email/components";
import { Blockquote } from "@mailingui/components";

export default function BlockquoteExample() {
  return (
    <Container style={container}>
      <Blockquote style={{ margin: 0, lineHeight: "26px" }}>
        &quot;After all&quot; he said, &quot;everyone enjoys a good joke,
        right?&quot;
      </Blockquote>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "24px 0",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
