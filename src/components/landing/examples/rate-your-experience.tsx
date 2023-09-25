import { Container, Row, Column } from "@react-email/components";
import { P, IconRow } from "@mailingui/components";

export default function RateYourExperience() {
  return (
    <Container style={container}>
      <Row>
        <Column align="center">
          <P style={{ marginBottom: "12px" }}>Rate your experience:</P>
        </Column>
      </Row>
      <Row>
        <Column>
          <IconRow
            align="center"
            fullWidth={true}
            icons={[
              {
                href: "#",
                src: "https://i.ibb.co/W3xxzyp/confounded-face.png",
              },
              {
                href: "#",
                src: "https://i.ibb.co/qy348qN/neutral-face.png",
              },
              {
                href: "#",
                src: "https://i.ibb.co/Qn1rS3S/similing-face.png",
              },
              {
                href: "#",
                src: "https://i.ibb.co/Msz3Tqm/heart-eyes-face.png",
              },
            ]}
            iconWidth={36}
          />
        </Column>
      </Row>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0 0",
};
