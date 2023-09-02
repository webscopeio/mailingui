import * as React from "react";
import {
  Body,
  Container,
  Html,
  Preview,
  Head,
  Row,
  Column,
  Img,
  Button,
  Link as ReactEmailLink,
} from "@react-email/components";
import { H1, P, H3, Link, HR } from "@mailingui/components";

const DOMAIN = "mailingui.com";
const ASSETS_DIR = "static/minimal";
const baseUrl = `${
  process.env.NODE_ENV === "development"
    ? ""
    : `https://${process.env.VERCEL_URL ?? DOMAIN}`
}/${ASSETS_DIR}`;

export default function EventConfirmation({
  preview = "Minimal - we&apos;ve confirmed your participation",
  eventGuest = "Jacob",
  eventName = "Minimal",
  eventAddress = "Moravské nám. 1007/14",
}: Record<string, string>) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Logo />
          <Row>
            <Column>
              <HR />
              <H1>Get Ready! You&apos;re in for {eventName}!</H1>
              <P>Dear, {eventGuest}:</P>
              <P>
                We are thrilled to inform you that your registration for{" "}
                {eventName}
                has been successfully confirmed! Get ready for an unforgettable
                experience on{" "}
                <b>
                  September 5, 2023 at {eventName} HQ — {eventAddress}
                </b>
                . We can&apos;t wait to have you join us for this exciting
                event.
              </P>
              <P compact>
                <b>When:</b> September 5, 2023
              </P>
              <P compact>
                <b>What Time:</b> 4PM - 9PM
              </P>
              <P compact>
                <b>Where:</b> {eventName} HQ — {eventAddress}
              </P>
              <MinimalButton href="#">Save on Calendar</MinimalButton>
              <P>
                Feel free to reach out to us if you have any questions or need
                further assistance. We&apos;re here to make sure you have a
                seamless and enjoyable experience.
              </P>
              <P muted>
                Best regards,
                <br /> Minimal Team
              </P>
              <HR />
            </Column>
          </Row>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const body = {
  margin: 0,
};

const container = {
  backgroundColor: "#fafafa", // bg-neutral-50,
  padding: "60px 40px",
  maxWidth: "600px",
};

// Components

const Logo = () => (
  <Row>
    <Column width={38} height={34}>
      <Img
        width={34}
        height={34}
        src={`${baseUrl}/star.png`}
        alt="Minimal Logo"
      />
    </Column>
    <Column>
      <H3 compact>MINIMAL</H3>
    </Column>
  </Row>
);

const MinimalButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  // These styles are copy-and-paste to match theme
  <div style={{ margin: "24px 0 0" }}>
    <Button
      pX={28}
      pY={16}
      href={href}
      style={{
        backgroundColor: "#171717",
        fontSize: "17px",
        color: "#fff",
        fontFamily:
          "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif;",
      }}
    >
      {children}
    </Button>
  </div>
);

const Footer = () => (
  <>
    <Row style={{ marginBottom: "18px" }}>
      <Column width={24} style={{ paddingRight: "18px" }}>
        <ReactEmailLink href="#">
          <Img
            style={{ height: "24px", width: "24px" }}
            src={`${baseUrl}/icons/github.png`}
          />
        </ReactEmailLink>
      </Column>
      <Column width={24} style={{ paddingRight: "18px" }}>
        <ReactEmailLink href="#">
          <Img
            style={{ height: "24px", width: "24px" }}
            src={`${baseUrl}/icons/linkedin.png`}
          />
        </ReactEmailLink>
      </Column>
      <Column width={24} style={{ paddingRight: "18px" }}>
        <ReactEmailLink href="#">
          <Img
            style={{ height: "24px", width: "24px" }}
            src={`${baseUrl}/icons/slack.png`}
          />
        </ReactEmailLink>
      </Column>
      <Column width={24} style={{ paddingRight: "18px" }}>
        <ReactEmailLink href="#">
          <Img
            style={{ height: "24px", width: "24px" }}
            src={`${baseUrl}/icons/twitter.png`}
          />
        </ReactEmailLink>
      </Column>
      <Column width={"100%"}></Column>
    </Row>
    <Row>
      <Column>
        <P small compact muted>
          © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois 85486
        </P>
        <P small compact muted>
          <Link muted href="#unsubscribe">
            Unsubscribe
          </Link>{" "}
          ·{" "}
          <Link muted href="#tos">
            Terms of Use
          </Link>{" "}
          ·{" "}
          <Link muted href="#pp">
            Privacy Policy
          </Link>
        </P>
      </Column>
    </Row>
  </>
);
