import { Container, Row, Column, Link } from "@react-email/components";
import { Img, P } from "@mailingui/components";

export default function RateYourExperience() {
  return (
    <Container style={container}>
      <Row style={row}>
        <Column>
          <P style={{ marginBottom: "12px" }}>Rate your experience:</P>
        </Column>
      </Row>
      <Row>
        <Column align="center">
          <Link href="#">
            <Img
              caption="Terrible"
              src={"https://i.ibb.co/W3xxzyp/confounded-face.png"}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#">
            <Img
              caption="Okay"
              src={"https://i.ibb.co/qy348qN/neutral-face.png"}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#">
            <Img
              caption="Great"
              src={"https://i.ibb.co/Qn1rS3S/similing-face.png"}
            />
          </Link>
        </Column>
        <Column align="center">
          <Link href="#">
            <Img
              caption="Excelent"
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
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 6px",
};
