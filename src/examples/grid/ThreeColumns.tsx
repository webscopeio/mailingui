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
import { Grid, Cell, Img, P } from "@mailingui/components";

const Item: React.FC<{
  imageSrc: string;
  category: string;
  title: string;
  price: string;
}> = ({ imageSrc, category, title, price }) => {
  return (
    <div style={{ marginBottom: "24px" }}>
      <Grid>
        <Cell width={20}>
          <Img
            compact
            alt={title}
            src={imageSrc}
            style={{ borderRadius: "12px" }}
          />
        </Cell>
        <Cell width={80}>
          <Grid breakpoint={360} gap={0}>
            <Cell width={80}>
              <P small compact>
                {category}
              </P>
              <P style={{ lineHeight: 1.3 }} compact>
                <b>{title}</b>
              </P>
            </Cell>
            <Cell width={20}>
              <P compact>{price}</P>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </div>
  );
};

export default function Demo() {
  return (
    <Html>
      <Head />
      <Preview>Hello Demo</Preview>
      <Body style={body}>
        <Container style={container}>
          <Row>
            <Column align="center">
              <Item
                imageSrc="https://images.unsplash.com/photo-1600956054489-a23507c64a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fFNoYW1wb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                category="Marquee Hair"
                title="Total Hair Protection and Care"
                price="$149.99"
              />
              <Item
                imageSrc="https://images.unsplash.com/photo-1629198726018-604230bdb091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fEJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                category="Glossier"
                title="Milky Jelly Cleanser"
                price="$99.99"
              />
              <Item
                imageSrc="https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                category="Glossier"
                title="Exfoliating Skin Perfector"
                price="$249.99"
              />
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
