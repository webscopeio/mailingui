import * as React from "react";
import { Column, Row, Section } from "@react-email/components";

import { row } from "./styles";
import { baseUrl } from "./assets";

import { HR, Link, P, IconRow } from "@mailingui/components";

export const Footer: React.FC = () => (
  <>
    <Row style={row}>
      <Column>
        <P muted>
          Best regards, <br /> Minimal Team
        </P>
      </Column>
    </Row>
    <Row style={{ marginBottom: "24px" }}>
      <Column
        style={{
          ...row,
          width: "100%",
          paddingTop: "36px",
          paddingBottom: "36px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <hr
          style={{
            width: "30px",
            height: "4px",
            margin: "4px 0",
            backgroundColor: "#ef4444",
            color: "#ef4444",
            borderWidth: 0,
          }}
        />
        <P compact>
          <b>We&apos;d like to hear from you </b>
          <br />
          Share your feedback at: <Link href="#">newsletters@minimal.com</Link>
        </P>
      </Column>
    </Row>
    <Row style={row}>
      <Column>
        <P small muted>
          If you&apos;d like to update your details please{" "}
          <Link small muted href="#">
            click here
          </Link>
          . Replies to this email will not reach us. If you don&apos;t want to
          receive these updates anymore, please unsubscribe{" "}
          <Link small muted href="#">
            here
          </Link>
          .
        </P>
        <HR />
      </Column>
    </Row>
    <Section style={row}>
      <IconRow
        icons={[
          {
            href: "#",
            src: `${baseUrl}/icons/github.png`,
          },
          {
            href: "#",
            src: `${baseUrl}/icons/linkedin.png`,
          },
          {
            href: "#",
            src: `${baseUrl}/icons/slack.png`,
          },
          {
            href: "#",
            src: `${baseUrl}/icons/twitter.png`,
          },
        ]}
      />
    </Section>
    <Row style={row}>
      <Column>
        <P small muted>
          © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois 85486
          <br />
          <Link small muted href="#unsubscribe">
            Unsubscribe
          </Link>{" "}
          ·{" "}
          <Link small muted href="#tos">
            Terms of Use
          </Link>{" "}
          ·{" "}
          <Link small muted href="#pp">
            Privacy Policy
          </Link>
        </P>
      </Column>
    </Row>
  </>
);
