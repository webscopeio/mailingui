import { Container } from "@react-email/components";
import { HR, Link, P } from "@mailingui/components";

export default function ReadMoreDivider() {
  return (
    <Container style={container}>
      <HR style={{marginBottom: "12px"}} />
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
        </Link>{" "}
        ·{" "}
        <Link href="#tos">
          Privacy
        </Link>
      </P>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "0",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
