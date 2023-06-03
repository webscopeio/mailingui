import React, { FC } from "react";
import { Heading as ReactEmailHeading, Column, Img, Row } from "@react-email/components";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: FC<HeadingProps> = ({ as = "h1" }) => {
  return (
    <>
      <Row style={header}>
        <Column style={headerContent}>
          <Img
            style={logo}
            width={120}
            src={`https://www.linkpicture.com/q/company-placeholder-logo-hero.png`}
          />
          <ReactEmailHeading as={as} style={heading}>New office for your company</ReactEmailHeading>
        </Column>
      </Row>
      <Img
        width="100%"
        src={`https://www.linkpicture.com/q/new-company-office-hero-placeholder.png`}
      />
    </>
  );
};

const heading = {
  color: "white",
  fontSize: 20,
};

const logo = {
  paddingBottom: 10,
};

const header = {
  borderRadius: "10px 10px 0 0",
  display: "flex",
  flexDireciont: "column",
};

const headerContent = { padding: "30px 40px" };

export default Heading;
