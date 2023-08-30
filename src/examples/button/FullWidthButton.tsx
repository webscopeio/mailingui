import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Row,
  Column,
  Head,
} from "@react-email/components";
import { Button } from "@mailingui/components";

const DifferentColorButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Different Color Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column>
              <Button href="#clicked!" width={520} height={56}>
                Full Width Button
              </Button>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default DifferentColorButtons;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "40px 0",
  textAlign: "center" as const,
};
