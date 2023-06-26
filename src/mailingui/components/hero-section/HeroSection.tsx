"use client";

import React, { CSSProperties, FC } from "react";
import {
  Heading as ReactEmailHeading,
  Column,
  Img,
  Row,
} from "@react-email/components";
import { theme } from "@mailingui/themes";

const {
  color: { background, foreground, brand },
} = theme;

const variants = {
  default: {
    backgroundColor: foreground["100"],
    color: background["100"],
  },
  inverted: {
    backgroundColor: background["100"],
    color: foreground["100"],
  },
  brand: {
    backgroundColor: brand,
    color: background["100"],
  },
  subtle: {
    backgroundColor: background["400"],
    color: foreground["400"],
  },
} as const;

interface HeroSectionProps {
  overlay?: boolean;
  centered?: boolean;
  variant?: keyof typeof variants;
  bgImg: string;
  logoSrc: string;
  overlayPadding?: CSSProperties["padding"];
}

const HeroSection: FC<HeroSectionProps> = ({
  overlay = false,
  centered = false,
  variant = "default",
  bgImg,
  logoSrc,
  overlayPadding = "40px",
}) => {
  const heading = {
    color: variants[variant].color,
    fontSize: 20,
  };

  return (
    <>
      <Row style={header(overlayPadding, overlay, bgImg)}>
        <Column style={headerContent(centered, variant)}>
          <Img style={logo(centered)} width={120} src={logoSrc} />
          <ReactEmailHeading style={heading}>
            New office for your company
          </ReactEmailHeading>
        </Column>
      </Row>
      {!overlay && <Img width="100%" src={bgImg} />}
    </>
  );
};

const logo = (centered: boolean): CSSProperties => ({
  paddingBottom: 10,
  margin: centered ? "0 auto" : undefined,
});

const header = (
  overlayPadding: CSSProperties["padding"],
  overlay: boolean,
  bgImg: string
): CSSProperties => ({
  borderRadius: "10px 10px 0 0",
  background: overlay ? `url('${bgImg}')` : "none",
  padding: overlay ? overlayPadding : undefined,
});

const headerContent = (
  centered: boolean,
  variant: keyof typeof variants
): CSSProperties => ({
  padding: "30px 40px",
  background: variants[variant].backgroundColor,
  borderRadius: "10px",
  textAlign: centered ? "center" : undefined,
});

export { HeroSection, type HeroSectionProps };
