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

import { body, container, row } from "../shared/styles";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

export const Wrapper: React.FC<
  React.PropsWithChildren<{ preview?: string }>
> = ({ preview, children }) => {
  return (
    <Html>
      <Head />
      {preview && <Preview>{preview}</Preview>}
      <Body style={body}>
        <Container style={container}>
          <Header />
          <Row style={row}>
            <Column>{children}</Column>
          </Row>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
};
