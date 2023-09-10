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

import Example from "./CustomStyles.mdx";
import { Markdown } from "@mailingui/components";

export default function Email() {
  return (
    <Html>
      <Head />
      <Preview>Hello Markdown</Preview>
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column>
              <Markdown
                theme={{
                  headings: {
                    fontWeight: 600,
                    color: "#4f46e5",
                  },
                  text: {
                    fontFamily:
                      "'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif",
                  },
                  "primary": {
                    backgroundColor: "#4f46e5",
                    border: "1px solid #4f46e5"
                  }
                }}
              >
                <Example title="Latest News" />
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