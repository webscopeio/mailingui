import * as React from "react";
import { Column, Container, Row } from "@react-email/components";
import { Button, P } from "@mailingui/components";

export default function SendMyFeedback() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P style={{ marginBottom: "12px" }}>
            Write a review of your own:
          </P>
          <Button compact href={"#"}>
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
};
