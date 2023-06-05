import { Body, Container, Head, Html, Preview } from "@react-email/components";
import * as React from "react";
import { theme } from "../theme";
import Heading from "./Heading";

export const ImageOnlyPage = () => (
  <Html>
    <Head />
    <Preview>Small Badges</Preview>
    <Body style={main}>
      <Container style={theme.container}>
        <Heading />
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
