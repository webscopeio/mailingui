import * as React from "react";

import {
  Body,
  Container,
  Html,
  Preview,
  Head,
  Row,
  Column,
} from "@react-email/components";

import { MDXComponents } from "mdx/types";
import Example from "./Newsletter.mdx";
import { Markdown, Typography } from "@mailingui/components";
import { type Theme } from "@mailingui/themes";
import { cx } from "@mailingui/utils";

const theme: Theme = {
  headings: {
    fontWeight: 600,
    color: "#0dba0d",
  },
  text: {
    fontWeight: 400,
  },
  a: {
    fontWeight: 600,
    textDecorationColor: "#0dba0d",
    textDecorationThickness: "3px",
  },
};

const components: MDXComponents = {
  Small: (props) => (
    <Typography.P
      compact
      small
      muted
      style={cx(["text"], {
        theme,
      })}
      {...props}
    />
  ),
  Banner: (props) => (
    <Row style={{ marginBottom: "24px" }}>
      <Column
        style={{
          width: "100%",
          padding: "24px 24px 0",
          backgroundColor: "#e8e6df",
          borderRadius: "12px",
        }}
        {...props}
      />
    </Row>
  ),
};

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>newsletter.news · September 1, 2023</Preview>
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column>
              <Markdown theme={theme} components={components}>
                <Example title="newsletter.news" />
              </Markdown>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
}

export const body: React.CSSProperties = {
  backgroundColor: "#fff", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  padding: "60px 30px",
  maxWidth: "600px", // Estalbish the maximum size of the email
};