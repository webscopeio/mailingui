import { Body, Container, Head, Html, Preview } from "@react-email/components";
import * as React from "react";
import { theme } from "../../email-templates/default/theme";
import Header from "../../email-templates/default/components/Header";

export const ImageOnlyPage = () => (
  <Html>
    <Head />
    <Preview>Small Badges</Preview>
    <Body style={main}>
      <Container style={theme.container}>
        <Header />
      </Container>
    </Body>
  </Html>
);

export default ImageOnlyPage;

const main = {
  backgroundColor: theme.backgroundColor,
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};
