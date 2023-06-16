"use client";

import React, { CSSProperties, FC } from "react";
import {
  Heading as ReactEmailHeading,
  Column,
  Img,
  Row,
} from "@react-email/components";

interface HeroSectionProps {
  overlay?: boolean;
  centered?: boolean;
  overlayPadding?: CSSProperties["padding"];
}

const HeroSection: FC<HeroSectionProps> = ({
  overlay = false,
  centered = false,
  overlayPadding = "40px",
}) => {
  return (
    <>
      <Row style={header({ overlay, overlayPadding })}>
        <Column style={headerContent({ overlay, centered })}>
          <Img
            style={logo({ centered })}
            width={120}
            src={`https://www.linkpicture.com/q/company-placeholder-logo-hero.png`}
          />
          <ReactEmailHeading style={heading}>
            New office for your company
          </ReactEmailHeading>
        </Column>
      </Row>
      {!overlay && (
        <Img
          width="100%"
          src={`https://www.linkpicture.com/q/new-company-office-hero-placeholder.png`}
        />
      )}
    </>
  );
};

const heading = {
  color: "white",
  fontSize: 20,
};

const logo = ({ centered }: HeroSectionProps): CSSProperties => ({
  paddingBottom: 10,
  margin: centered ? "0 auto" : undefined,
});

const header = ({
  overlay,
  overlayPadding,
}: HeroSectionProps): CSSProperties => ({
  borderRadius: "10px 10px 0 0",
  background: overlay
    ? "url('https://www.linkpicture.com/q/new-company-office-hero-placeholder.png')"
    : "none",
  padding: overlay ? overlayPadding : undefined,
});

const headerContent = ({ centered }: HeroSectionProps): CSSProperties => ({
  padding: "30px 40px",
  background: "black",
  borderRadius: "10px",
  textAlign: centered ? "center" : undefined,
});

export { HeroSection, type HeroSectionProps };
