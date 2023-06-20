import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";
import { Badge, Divider, Text, ThemeProvider } from "@mailingui/components";
import { defaultTheme, getCssText } from "@mailingui/themes";

const CustomStyledParagraphs = ({
  firstName = "Jan",
}: {
  firstName: string;
}) => {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: getCssText(),
          }}
        />
      </Head>
      <Preview>Custom Styled Paragraph</Preview>
      <Body style={main}>
        <ThemeProvider theme={defaultTheme}>
          <Container style={container}>
            <Text variant="default" size="lg" style={{ fontWeight: 700 }}>
              Welcome Home, {firstName}!
            </Text>
            <Badge dot variant="warning" noBorder>
              Premium Stay
            </Badge>
            <Text style={{ lineHeight: "32px" }}>
              Welcome to the iconic Continental Hotel, where we cater to the
              most discerning clientele and the occasional four-legged friend
              with impeccable taste in tailored suits. Our services extend far
              beyond ensuring your safety; we&apos;re here to provide you with
              an unforgettable experience that will leave you shaken, not
              stirred.
            </Text>
            <Text style={{ lineHeight: "32px" }}>
              So sit back, relax, and allow us to pamper you with our
              unparalleled amenities, including complimentary bulletproof
              pyjamas and our patented &quot;Silencer Suite&quot; for a good
              night&apos;s sleep. Remember, at the Continental, we pride
              ourselves on discretion and maintaining a peaceful ambiance, so
              please refrain from engaging in any impromptu pencil duels during
              your stay. We hope you enjoy your time with us, {firstName}, and
              remember, our concierge is always ready to assist you in any way
              possible.
            </Text>
            <Text style={{ fontWeight: 600 }}>— The Continental</Text>
            <Divider />
            <Text size="sm" style={{ color: "gray" }}>
              PD: Mr. {firstName}, while we ca not promise a quiet night with
              Baba Yaga as a guest, we can assure you a thrilling experience
              that will leave you feeling like you are the star of your own
              action-packed movie.
            </Text>
            <Text style={{ color: "#a7abad" }}>
              420 Wick Way New York, NY 10001 United States
            </Text>
          </Container>
        </ThemeProvider>
      </Body>
    </Html>
  );
};

export default CustomStyledParagraphs;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "40px 0",
  maxWidth: 580,
};
