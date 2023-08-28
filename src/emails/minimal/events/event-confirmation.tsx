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
import React, { FC } from "react";
import {
  SocialIcon,
  type SocialIconType,
  Button,
  H3,
  H1,
  P,
  Link,
} from "@mailingui/components";

type EventConfirmationProps = {
  name: string;
  date: string;
  time: string;
  totalCost: string;
  eventName: string;
  reservationUrl: string;
  numberOfGuests: string;
};

const baseUrl = `${
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
}/static/minimal-theme`;

export const EventConfirmation: FC<EventConfirmationProps> = ({
  name = "Jacob",
  time = "4PM - 9PM",
  date = "September 5, 2023",
  totalCost = "$ 28.00",
  eventName = "Minimal Meetup",
  reservationUrl = "https://google.com",
  numberOfGuests = "2",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Minimal - we&apos;ve confirmed your participation</Preview>
      <Body style={main}>
        <Container style={container} width={600}>
          <RowFlow>
            <Logo />
          </RowFlow>
          <RowFlow>
            <Img width={520} src={`${baseUrl}/divider.png`} />
            <H1>Your {eventName} Event Confirmation</H1>
            <P>Dear, {name}:</P>
            <P>
              Thank you for signing up for the {eventName}. Via this email we
              are confirming your participation.
            </P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </RowFlow>
          <RowFlow>
            <Detail label="Date">{date}</Detail>
            <Detail label="Time">{time}</Detail>
            <Detail label="Number of Guests">{numberOfGuests}</Detail>
            <Detail label="Entre Fee">{totalCost}</Detail>
          </RowFlow>
          <RowFlow>
            <Button
              href={reservationUrl}
              width={520}
              height={56}
              backgroundColor="#000000"
            >
              Change Attendance
            </Button>
          </RowFlow>
          <RowFlow>
            <P>
              We hope you see you at the event and don&apos;t forget to take
              advantage of the amenities and services we offer. Should you have
              any special requests or requirements, please do not hesitate to
              contact us.
            </P>
            <P>
              Please note there will be a photographer at the event and we will
              be taking photos for promotional purposes. If you do not wish to
              be photographed, please let us know.
            </P>
            <P>
              Thank you again for your interest. We look forward to seeing you
              there.
            </P>
            <P>Best regards,</P>
            <P> Minimal Team</P>
            <Img width={520} src={`${baseUrl}/divider.png`} />
          </RowFlow>
          <RowFlow>
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
          </RowFlow>
          <RowFlow>
            <P compact muted>
              © Viola Company Inc., 2972 Westheimer Rd. Santa Ana, Illinois
              85486
            </P>
            <P compact muted>
              <Link href="#unsubscribe">Unsubscribe</Link> ·{" "}
              <Link href="#tos">Terms of Use</Link> ·{" "}
              <Link href="#pp">Privacy Policy</Link>
            </P>
          </RowFlow>
        </Container>
      </Body>
    </Html>
  );
};

export default EventConfirmation;

// Components
const Logo = () => (
  <>
    <Column width={46} height={34}>
      <Img src={`${baseUrl}/star.png`} alt="Star" />
    </Column>
    <Column>
      <H3 compact>MINIMAL</H3>
    </Column>
  </>
);

const RowFlow = ({ children }: { children: React.ReactNode }) => (
  <Row style={{ marginBottom: "24px" }}>{children}</Row>
);

const Detail = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <P compact>
    <b>{label}:</b> {children}
  </P>
);

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  padding: "60px 0 122px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "60px 40px 40px",
  width: "600px",
  fontFamily:
    "'Inter', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
};
