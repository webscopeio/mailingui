import * as React from "react";
import { Column, Row, Section } from "@react-email/components";

import { row } from "../styles";
import { baseUrl } from "../assets";
import { colors, theme } from "../theme";

import * as components from "@mailingui/components";
import { applyTheme } from "@mailingui/utils";

const { HR, Link, P, IconRow } = applyTheme(components, theme);

export const Footer = ({
  isNewsletter = false,
  feedbackFooter = false,
}: {
  isNewsletter?: boolean;
  feedbackFooter?: boolean;
}) => (
  <Row
    style={
      feedbackFooter
        ? { ...row, backgroundColor: colors.global, paddingTop: "32px" }
        : row
    }
  >
    <Column>
      {feedbackFooter && (
        <Row>
          <Column>
            <P style={{ color: "#FFFFFF" }}>
              Your feedback is important to us, and it will help us identify
              areas where we can improve and better serve our customers. We
              value your opinion, and we would appreciate any suggestions or
              comments that you may have.
            </P>
            <P style={{ color: "#FFFFFF" }}>
              Thank you for your time and consideration, and we look forward to
              hearing from you soon.
            </P>
          </Column>
        </Row>
      )}
      <Row>
        <Column>
          <P
            style={
              feedbackFooter
                ? { marginBottom: "48px", color: "#FFFFFF" }
                : { marginBottom: 0 }
            }
          >
            Best regards, <br /> Minimal Team
          </P>
        </Column>
      </Row>
      {!feedbackFooter && (
        <Row>
          <Column>
            <HR />
          </Column>
        </Row>
      )}
      <Section>
        <IconRow
          align="left"
          iconWidth={20}
          paddingBottom="16px"
          icons={[
            {
              href: "#",
              src: `${baseUrl}/icons/linkedin.png`,
            },
            {
              href: "#",
              src: `${baseUrl}/icons/skype.png`,
            },
            {
              href: "#",
              src: `${baseUrl}/icons/medium.png`,
            },
            {
              href: "#",
              src: `${baseUrl}/icons/twitter.png`,
            },
            {
              href: "#",
              src: `${baseUrl}/icons/facebook.png`,
            },
          ]}
        />
      </Section>
      <Row>
        <Column>
          <P
            small
            muted
            style={
              feedbackFooter
                ? { textAlign: "left", color: "#FFFFFF" }
                : { textAlign: "left" }
            }
          >
            © Minimal Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
            85486
            {isNewsletter && (
              <>
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
              </>
            )}
          </P>
        </Column>
      </Row>
    </Column>
  </Row>
);
