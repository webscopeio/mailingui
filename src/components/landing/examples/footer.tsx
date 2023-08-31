import { Container } from "@react-email/components";
import { Divider, Link, P } from "@mailingui/components";

export default function ReadMoreDivider() {
  return (
    <Container style={container}>
      <Divider />
      <P small compact muted>
        © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois 85486
      </P>
      <P small compact muted>
        <Link muted href="#unsubscribe">
          Unsubscribe
        </Link>{" "}
        ·{" "}
        <Link muted href="#tos">
          Terms of Use
        </Link>{" "}
        ·{" "}
        <Link muted href="#tos">
          Privacy
        </Link>
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
