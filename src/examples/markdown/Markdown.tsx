import * as React from "react";

import {
  Body,
  Container,
  Html,
  Preview,
  Head,
  Row,
  Column,
  Button,
} from "@react-email/components";

import MarkdownExample from "./Markdown.mdx";
import { Markdown } from "@mailingui/components";

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Hello Markdown</Preview>
      <Body style={body}>
        <Container style={container}>
          <Row style={row}>
            <Column>
              <Markdown
                components={{
                  Button: (props) => <CustomButton {...props} />,
                }}
              >
                <MarkdownExample title="Latest News" />
              </Markdown>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
}

export const body: React.CSSProperties = {
  backgroundColor: "#fafafa", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  padding: "60px 0", // We remove inline padding to enable full-width banners
  maxWidth: "600px", // Estalbish the maximum size of the email
};

export const row: React.CSSProperties = {
  padding: "0 30px", // Here we can enable the default padding for each table AKA rows
};

const CustomButton: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => (
  <div
    style={{
      margin: `24px 0`,
      backgroundColor: "#171717",
      width: "100%",
      textAlign: "center",
    }}
  >
    <Button
      pY={16}
      href={href}
      style={{
        width: "100%",
        fontSize: "17px",
        color: "#fff",
        fontFamily:
          "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
      }}
    >
      {children}
    </Button>
  </div>
);
