import * as React from "react";
import {
  Column,
  Row,
  Link as ReactEmailLink,
  Img,
} from "@react-email/components";
import { row } from "./styles";
import { baseUrl } from "./assets";
import { Banner } from "./Banner";
import { HR, Link, P } from "@mailingui/components";
import { theme } from "@mailingui/themes";

const { typography } = theme;

export const Footer: React.FC = () => (
  <>
    <Row style={row}>
      <Column>
        <P compact muted>
          Best regards, <br /> Minimal Team
        </P>
      </Column>
    </Row>
    <Banner style={{ margin: `${typography.typeFlow}px 0` }}>
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
      <P style={{ lineHeight: "1.5", margin: 0 }}>
        <b>We&apos;d like to hear from you </b>
      </P>
      <P style={{ lineHeight: "1.5", margin: 0 }}>
        Share your feedback at: <Link href="#">newsletters@minimal.com</Link>
      </P>
    </Banner>
    <Row style={row}>
      <Column>
        <P small compact muted>
          If you&apos;d like to update your details please{" "}
          <Link muted href="#">
            click here
          </Link>
          . Replies to this email will not reach us. If you don&apos;t want to
          receive these updates anymore, please unsubscribe{" "}
          <Link muted href="#">
            here
          </Link>
          .
        </P>
      </Column>
    </Row>
    <Row style={row}>
      <Column>
        <HR />
      </Column>
    </Row>
    <Row style={{ ...row, marginBottom: `${typography.typeFlow}px` }}>
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
    <Row style={row}>
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
