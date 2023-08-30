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
  P,
  Link,
  H3,
  H1,
  H2,
  OL,
  LI,
} from "@mailingui/components";

type MinimalResetPasswordProps = {
  customerName: string;
  discountCode: string;
  discount: number;
  link: string;
  expiration: string;
};

const baseUrl = `${
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://mailingui.com"
}/static/minimal-theme`;

export const MinimalDiscoutCode: React.FC<MinimalResetPasswordProps> = ({
  customerName = "Jacob",
  discountCode = "HAPPY20",
  discount = 20,
  expiration = "July 31, 2023",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - don&apos;t miss out on new discounts</Preview>
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
            <H1>Special Discount Alert!</H1>
            <P>Dear, {customerName}:</P>
            <P>
              As a thank you for your continued support and loyalty, we would
              like to offer you a special discount on your next purchase from
              Viola store.
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </Row>
          <Row style={row}>
            <H2>{discountCode}</H2>
            <P compact muted>
              {" "}
              Use the coupon code at checkout to receive {discount}% off your
              total order. This offer is valid until {expiration}, so be sure to
              take advantage of it before it expires.
            </P>
          </Row>
          <Row style={row}>
            <Img width={520} src={`${baseUrl}/divider.png`} />
            <P>Here&apos;s how to claim your discount:</P>
            <OL>
              <LI>
                <b>First</b>, go to <Link>Viola Store&apos;s</Link> and choose
                any of the items in stock,
              </LI>
              <LI>
                <b>During checkout</b>, enter the discount code: {discountCode}{" "}
                to get {discount}% off your shopping cart,
              </LI>
              <LI>
                <b>Finally</b>, watch as the {discount}% savings grace your
                total purchase.
              </LI>
            </OL>
            <P>
              Should you have any questions or require assistance, please
              don&apos;t hesitate to reach out to our dedicated customer support
              team.
            </P>
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

export default MinimalDiscoutCode;

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
