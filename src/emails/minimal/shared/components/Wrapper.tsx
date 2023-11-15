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

import { body, container, row } from "../styles";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Fonts } from "./Fonts";

export const Wrapper = ({
  preview,
  headerHeading,
  isNewsletter,
  feedbackFooter,
  children,
}: React.PropsWithChildren<{
  preview?: string;
  headerHeading?: string;
  feedbackFooter?: boolean;
  isNewsletter?: boolean;
}>) => {
  return (
    <Html>
      <Head>
        <Fonts />
      </Head>
      {preview && <Preview>{preview}</Preview>}
      <Body style={body}>
        <Container style={container}>
          <Header headerHeading={headerHeading} />
          <Row style={headerHeading ? { ...row, paddingTop: "32px" } : row}>
            <Column>{children}</Column>
          </Row>
          <Footer feedbackFooter={feedbackFooter} isNewsletter={isNewsletter} />
        </Container>
      </Body>
    </Html>
  );
};
