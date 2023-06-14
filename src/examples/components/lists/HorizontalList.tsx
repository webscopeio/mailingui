import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { List } from "@mailingui/components";

export default function CombinedLists() {
  return (
    <Html>
      <Head />
      <Preview>Centered Paragraph</Preview>
      <Body style={main}>
        <Container style={container}>
          <List.Root horizontal>
            <List.Item
              title="USWNT 2022/23 Stadium Home"
              style={{ paddingRight: "32px" }}
            >
              Women&apos;s Nike Dri-FIT Soccer Jersey
            </List.Item>
            <List.Item
              title="Brazil 2022/23 Stadium Goalkeeper"
              style={{ paddingRight: "32px" }}
            >
              Men&apos;s Nike Dri-FIT Short-Sleeve Football Shirt
            </List.Item>
            <List.Item title="FFF">
              Women&apos;s Nike Pre-Match Football Top
            </List.Item>
          </List.Root>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "30px 0",
  maxWidth: 580,
};
