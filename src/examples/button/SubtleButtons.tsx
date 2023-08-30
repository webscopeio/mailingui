import * as React from "react";
import { Head, Body, Container, Html, Preview } from "@react-email/components";
import { Button } from "@mailingui/components";

const SubtleButtons = () => {
  return (
    <Html>
      <Head />
      <Preview>Subtle Buttons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Button href="#clicked!" variant="subtle" size="xs">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="subtle" size="sm">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="subtle" size="md">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="subtle" size="lg">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="subtle" size="xl">
            Button
          </Button>
          <span style={{ padding: 10 }} />
          <Button href="#clicked!" variant="subtle" size="2xl">
            Button
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

export default SubtleButtons;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const container = {
  padding: "40px 0",
  textAlign: "center" as const,
  maxWidth: 900,
};
