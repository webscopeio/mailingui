import * as React from "react";
import { Column, Container, Row } from "@react-email/components";
import { Button, P } from "@mailingui/components";

export default function SendMyFeedback() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P style={{ marginBottom: "12px" }}>
            Write a review of your own. Let us know what you think.
          </P>
          <Button href={"#"}>
            Send My Feedback
          </Button>
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
