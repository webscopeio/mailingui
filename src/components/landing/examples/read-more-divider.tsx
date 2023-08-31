import { Container } from "@react-email/components";
import { Divider, P } from "@mailingui/components";

export default function ReadMoreDivider() {
  return (
    <Container style={container}>
      <Divider />
      <P small muted compact>
        Note: If you have not finished your integration, check out our docs
      </P>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
