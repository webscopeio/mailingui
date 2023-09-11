import { Container } from "@react-email/components";
import { P, Link } from "@mailingui/components";

export default function ReadMoreDivider() {
  return (
    <Container style={container}>
      <P style={{marginBottom: "12px"}} small muted>
        © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois 85486
      </P>
      <P small muted>
        <Link href="#unsubscribe">
          Unsubscribe
        </Link>{" "}
        ·{" "}
        <Link href="#tos">
          Terms of Use
        </Link>
      </P>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0 0",
};
