import * as React from "react";
import {
  Body,
  Column,
  Container,
  Html,
  Preview,
  Img,
  Head,
  Row,
} from "@react-email/components";
import {
  SocialIcon,
  type SocialIconType,
  Button,
  P,
  Link,
  H3,
  H1,
} from "@mailingui/components";

type CampaignAnnouncementProps = {
  customerName: string;
  campaignName: string;
  linkHref: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const CampaignAnnouncement: React.FC<CampaignAnnouncementProps> = ({
  customerName = "Jacob",
  campaignName = "Minimal",
  linkHref = "https://google.com",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - Campaign Announcement</Preview>
      <Body style={main}>
        <Container style={container} width={600}>
          <Row style={row}>
            <Column width={46} height={34}>
              <Img src={`${baseUrl}/star.png`} alt="Star" />
            </Column>
            <Column>
              <H3 compact>MINIMAL</H3>
            </Column>
          </Row>
          <Row style={row}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
            <H1>Check out our new Campaign and win exciting prizes!</H1>
            <P>Dear, {customerName}:</P>
            <P>
              We are thrilled to annouce the launch of our new {campaignName}{" "}
              Campaign! After months of hard work, we are excited to show you
              what we have been up to. The{" "}
              <b>first 100 campaign subscribers will win exciting prizes</b>, so
              subscribe by clicking the button below and join {campaignName}!
            </P>
            <Button
              href={linkHref}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Join {campaignName} Campaign
            </Button>
            <P>
              Prizes include a <b>6-month traineeship in our company</b>.
              Additionally, all participants will receive discount coupon for
              various courses.
            </P>
            <P>
              Don&apos;t miss out on this opportunity to develop your skills and
              showcase your talent! Please let us know if you have any questions
              or need more information.
            </P>
            <P>Thank you for your time, and we hope to hear from you soon.</P>
            <P>
              Best regards,
              <br /> Minimal Team
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
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
          <Row style={row}>
            <P compact muted>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </P>
            <P compact muted>
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
          </Row>
        </Container>
      </Body>
    </Html>
  );
};

export default CampaignAnnouncement;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "60px 40px 40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};

const row = {
  margin: "0 0 24px",
};
