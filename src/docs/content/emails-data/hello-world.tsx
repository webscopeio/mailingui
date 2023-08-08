import { Body, Container, Html, Row } from "@react-email/components";
import { Text } from "@mailingui/components";

const HelloWorld = () => {
  return (
    <Html>
      <Body style={main}>
        <Container style={container} width={600}>
          <Row style={{ marginBottom: "16px" }}>
            <Text style={{ fontSize: "32px" }}>Hello World!</Text>
          </Row>
          <Row>
            <Text>
              I am email written in React utilizing MailingUI components.
            </Text>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};
export default HelloWorld;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0 122px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "40px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
