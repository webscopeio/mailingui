import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Text } from "@mailingui/components";

const DifferentSizedParagraphs = () => {
  return (
    <Html>
      <Head />
      <Preview>Different Sized Paragraphs</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text size="xs">
            Pellentesque et justo sagittis, efficitur lectus sit amet,
            pellentesque sem. Nulla luctus odio quis nulla ornare sollicitudin.
            Ut rutrum nulla non posuere varius. Vivamus congue interdum
            sollicitudin. Vivamus a varius turpis. Phasellus risus ligula,
            iaculis eu quam quis, imperdiet lacinia justo. Cras purus massa,
            pretium et molestie a, commodo ut dui.
          </Text>
          <Text size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Text size="md">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>
          <Text size="lg">
            Suspendisse iaculis ex enim, sit amet iaculis diam bibendum non. Ut
            in lectus et nibh interdum bibendum eget at odio. Nullam volutpat
            consequat mi, id luctus eros iaculis id. Mauris lacinia est
            fermentum, tincidunt tortor ut, ultrices ligula. Suspendisse sit
            amet massa et est sodales dictum ac ac ipsum.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default DifferentSizedParagraphs;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
  maxWidth: 580,
};
