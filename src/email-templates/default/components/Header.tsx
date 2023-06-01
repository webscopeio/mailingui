import React from "react";
import { Column, Img, Row } from "@react-email/components";
import Heading from "./Heading";

const Header = () => {
  return (
    <>
      <Row style={header}>
        <Column style={headerContent}>
          <Img
            style={logo}
            width={120}
            src={`https://www.linkpicture.com/q/company-placeholder-logo-hero.png`}
          />
          <Heading>New office for your company</Heading>
        </Column>
      </Row>
      <Img
        width="100%"
        src={`https://www.linkpicture.com/q/new-company-office-hero-placeholder.png`}
      />
    </>
  );
};

export default Header;

const logo = {
  paddingBottom: 10,
};

const header = {
  borderRadius: "10px 10px 0 0",
  display: "flex",
  flexDireciont: "column",
};

const headerContent = { padding: "30px 40px" };
