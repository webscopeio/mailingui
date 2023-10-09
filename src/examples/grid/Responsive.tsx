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
import { Img, Grid, Cell } from "@mailingui/components";

const Product: React.FC = () => (
  <Img
    compact
    alt={"Shampoo"}
    src={
      "https://images.unsplash.com/photo-1600956054489-a23507c64a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fFNoYW1wb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
    style={{ borderRadius: "12px" }}
  />
);

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
                <Cell>
                  <Product />
                </Cell>
                <Cell>
                  <Product />
                </Cell>
                <Cell>
                  <Product />
                </Cell>
                <Cell>
                  <Product />
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
