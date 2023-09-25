import { Container, Row, Column } from "@react-email/components";
import { P, HR, IconRow } from "@mailingui/components";
import { baseUrl } from "src/emails/minimal/events/shared/assets";

export default function ConnectWithUs() {
  return (
    <Container style={container}>
      <P muted compact>
        Sincerely,
        <br /> Minimal Team
      </P>
      <HR style={{ margin: "12px 0" }} />
      <Row>
        <Column>
          <P compact muted>
            Contact us
          </P>
        </Column>
        <Column>
          <IconRow
            compact
            align="right"
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
                src: `${baseUrl}/icons/twitter.png`,
              },
            ]}
          />
        </Column>
      </Row>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
};
