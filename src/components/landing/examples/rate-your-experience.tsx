import { Container, Row, Column } from "@react-email/components";
import { P, Emoji } from "@mailingui/components";

export default function RateYourExperience() {
  return (
    <Container style={container}>
      <Row style={row}>
        <Column>
          <P style={{marginBottom: "12px"}}>Rate your experience:</P>
        </Column>
      </Row>
      <Row style={row}>
        <Column>
          <Emoji
            type="confounded-face"
            href="#rate-1"
            bg
            style={{ width: "44px", height: "44px" }}
          />
        </Column>
        <Column>
          <Emoji
            type="sad-face"
            href="#rate-2"
            bg
            style={{ width: "44px", height: "44px" }}
          />
        </Column>
        <Column>
          <Emoji
            type="neutral-face"
            href="#rate-3"
            bg
            style={{ width: "44px", height: "44px" }}
          />
        </Column>
        <Column>
          <Emoji
            type="smiling-face"
            href="#rate-4"
            bg
            style={{ width: "44px", height: "44px" }}
          />
        </Column>
        <Column width={44}>
          <Emoji
            type="heart-eyes-face"
            href="#rate-5"
            bg
            style={{ width: "44px", height: "44px" }}
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
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 6px",
};
