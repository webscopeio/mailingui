import { Container, Row, Column } from "@react-email/components";
import { Img, Link, P } from "@mailingui/components";

export default function CustomerService() {
  return (
    <Container style={container}>
      <Row>
        <Column width="auto">
          <P compact>Were you satisfied with your order?</P>
        </Column>
        <Column width={12} />
        <Column width={60}>
          <Link href="#">
            <Img
              compact
              width={32}
              src={`https://i.ibb.co/mTFWRLS/thumbs-down.png`}
            />
          </Link>
        </Column>
        <Column width={32}>
          <Link href="#">
            <Img
              compact
              width={32}
              src={`https://i.ibb.co/nc5tK5J/thumbs-up.png`}
            />
          </Link>
        </Column>
      </Row>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
};
