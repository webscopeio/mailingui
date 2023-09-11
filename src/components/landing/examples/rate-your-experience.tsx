import { Container, Row, Column } from "@react-email/components";
import { Link, Img, P } from "@mailingui/components";

export default function RateYourExperience() {
  return (
    <Container style={container}>
      <Row>
        <Column>
          <P style={{ marginBottom: "12px" }}>Rate your experience:</P>
        </Column>
      </Row>
      <Row>
        <Column align="center">
          <Link href="#">
            <Img
              width={36}
              src={"https://i.ibb.co/W3xxzyp/confounded-face.png"}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#">
            <Img width={36} src={"https://i.ibb.co/qy348qN/neutral-face.png"} />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#">
            <Img
              width={36}
              src={"https://i.ibb.co/Qn1rS3S/similing-face.png"}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#">
            <Img
              width={36}
              src={"https://i.ibb.co/Msz3Tqm/heart-eyes-face.png"}
            />
          </Link>
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
