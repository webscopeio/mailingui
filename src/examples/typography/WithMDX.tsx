import * as React from "react";

import {
  Body,
  Container,
  Html,
  Head,
  Row,
  Column,
} from "@react-email/components";

import Demo from "./WithMDX.mdx";
import { Markdown } from "@mailingui/components";

export default function Email() {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column>
              <Markdown
                theme={{
                  global: {
                    marginBottom: "12px",
                  },
                  headings: {
                    fontWeight: 600,
                  },
                }}
              >
                <Demo />
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
