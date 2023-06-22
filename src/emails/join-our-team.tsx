import {
  Body,
  Column,
  Container,
  Html,
  Preview,
  Img,
  Row,
} from "@react-email/components";
import React, { FC } from "react";
import {
  Text,
  SocialIcon,
  type SocialIconType,
  Head,
} from "@mailingui/components";

type MinimalEventInvitationProps = {
  name: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const MinimalEventInvitation: FC<MinimalEventInvitationProps> = ({
  name = "Jacob",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Join our team</Preview>
      <Body style={main}>
        <Container style={container} width={600}>
          <Row style={{ marginBottom: "16px" }}>
            <Column width={46} height={34}>
              <Img src={`${baseUrl}/star.png`} alt="Star" />
            </Column>
            <Column>
              <Text
                style={{
                  fontSize: "30px",
                  lineHeight: "36px",
                }}
              >
                MINIMAL
              </Text>
            </Column>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Text style={{ fontSize: "48px", lineHeight: "52px" }}>
              Join Our Team as a UI/UX Designer
            </Text>
          </Row>
          <Row style={{ marginBottom: "16px" }}>
            <Text> Dear {name},</Text>
            <Text>
              I hope this message finds you well. I am writing to extend an
              invitation to join our team here at Viola Studio. We are excited
              to offer you the opportunity to work alongside a dynamic group of
              professionals in a challenging and rewarding environment.
            </Text>
            <Text>
              As a member of our team, you will have the chance to make a
              significant impact on our organization and contribute to the
              success of our mission. We believe in providing our employees with
              the resources and support they need to achieve their personal and
              professional goals, and we are committed to fostering a culture of
              innovation and collaboration.
            </Text>
            <Text>
              We are looking for someone who is passionate about{" "}
              <b>UI/UX Design</b>, has a strong work ethic, and is eager to
              learn and grow in their career. Your skills and experience make
              you an excellent candidate for this position, and we believe that
              you would be a valuable addition to our team.
            </Text>
            <Text>
              If you are interested in joining us, please reply to this email
              and let us know. We would be happy to discuss the details of the
              position further and answer any questions you may have. We look
              forward to hearing from you soon. Thank you for your time and
              consideration.
            </Text>
            <Text>
              Best regards,
              <br /> Minimal Team
            </Text>
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={{ marginBottom: "32px" }}>
            {(
              [
                "linkedin",
                "skype",
                "medium",
                "twitter",
                "facebook",
              ] as SocialIconType[]
            ).map((type, i) => (
              <div key={i}>
                <Column width={24} style={{ paddingRight: "20px" }}>
                  <SocialIcon
                    type={type}
                    style={{ margin: 0 }}
                    size={24}
                    href="https://google.com"
                  />
                </Column>
              </div>
            ))}
            <Column width={520 - 196}></Column>
          </Row>
          <Row>
            <Text>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </Text>
            <Text>
              <a
                href="#unsubscribe"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Unsubscribe
              </a>{" "}
              ·{" "}
              <a
                href="#tos"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Terms of Use
              </a>{" "}
              ·{" "}
              <a
                href="#pp"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  display: "inline-block",
                }}
              >
                Privacy Policy
              </a>
            </Text>
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default MinimalEventInvitation;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0 122px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
