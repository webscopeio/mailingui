import { Container } from "@react-email/components";
import { Link } from "@mailingui/components";

export default function Links() {
  return (
    <Container style={container}>
      <Link block href="#">
        More brilliant plans →
      </Link>
      <Link block href="#">
        Terrible brilliant plans →
      </Link>
      <Link block href="#">
        Not so terrible brilliant plans →
      </Link>
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
