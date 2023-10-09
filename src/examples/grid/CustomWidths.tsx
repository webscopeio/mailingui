import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
} from "@react-email/components";
import { H4, Link, Img, Grid, Cell } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Hello Demo</Preview>
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column align="center">
              <Grid>
                <Cell width={35}>
                  <Img
                    compact
                    alt={"Responsive Email"}
                    src={
                      "https://images.unsplash.com/photo-1620287341401-e2945a4b9daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVtYWlsfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    }
                    style={{ borderRadius: "12px" }}
                  />
                </Cell>
                <Cell width={65}>
                  <H4 compact style={{ marginBottom: "9px" }}>
                    Responsive Email Cards with MailingUI
                  </H4>
                  <Link href={"/"}>Read more →</Link>
                </Cell>
              </Grid>
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
