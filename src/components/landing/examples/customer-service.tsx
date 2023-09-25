import { Container, Row, Column } from "@react-email/components";
import { IconRow, P } from "@mailingui/components";

export default function CustomerService() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P compact>Were you satisfied with your order?</P>
        </Column>
        <Column>
          <IconRow
            compact
            align="right"
            icons={[
              {
                href: "#",
                src: "https://i.ibb.co/mTFWRLS/thumbs-down.png",
              },
              {
                href: "#",
                src: "https://i.ibb.co/nc5tK5J/thumbs-up.png",
              },
            ]}
            iconWidth={38}
            iconGap={16}
          />
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
