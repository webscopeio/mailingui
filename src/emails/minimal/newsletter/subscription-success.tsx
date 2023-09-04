import * as React from "react";

import {
  Body,
  Container,
  Html,
  Preview,
  Head,
  Row,
  Column,
  Img,
} from "@react-email/components";

import { body, container, row } from "../shared/styles";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

import { baseUrl } from "../shared/assets";
import { Banner } from "../shared/Banner";
import { H1, P, HR, H3, OL, LI, Link } from "@mailingui/components";

export default function SubscriptionSuccess({
  preview = "Welcome to the Minimalist",
  newsletterName = "The Minimalist",
  subscriberName = "Jacob",
}: Record<string, string>) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Header />
          <Row style={row}>
            <Column>
              <HR />
              <H1>{preview}</H1>
              <P>Dear {subscriberName},</P>
              <P>
                Welcome to <b>{newsletterName}</b> community. Your subscription
                has been confirmed. Get ready for the latest updates, tips, and
                more, straight to your inbox. Your journey with us starts now.
              </P>
              <HR />
              <H3>
                Recap of <Link href="#">#420</Link>
              </H3>
              <div style={{ margin: "24px 0" }}>
                <Img
                  width={"100%"}
                  src={`${baseUrl}/newsletter/speaker.png`}
                  alt="The Minimalist"
                />
                <P style={{ textAlign: "center" }} compact muted>
                  Lights, Camera, Action
                </P>
              </div>
              <OL>
                <LI>
                  Andy Warfield wrote an in-depth article on Dr Werner&apos;s
                  blog about what it was like{" "}
                  <Link href="#">
                    Building and operating a pretty big storage system called S3
                  </Link>
                  .
                </LI>
                <LI>
                  Vercel just introduced <Link href="#">react-tweet</Link>,
                  which lets you embed tweets into any React app with a single
                  line of code. It comes with RSC support, less client-side
                  JavaScript, and it already needs to be renamed 🙅‍♂️.
                </LI>
                <LI>
                  Brian Rinaldi wrote this touching{" "}
                  <Link href="#">Jamstack Eulogy</Link>, which sparked some
                  debate among all the pro-Jammies and anti-Jammies out there.
                </LI>
                <LI>
                  <Link href="#">Remix-Dev-Tools</Link> makes it easier to
                  monitor and manage page info, URL parameters, server
                  responses, and more in your Remix apps.
                </LI>
                <LI>
                  In a classic case of “if you can&apos;t beat &apos;em, join
                  &apos;em”, Stack Overflow just released{" "}
                  <Link href="#">Overflow AI</Link>. It&apos;s kind of like
                  ChatGPT, but it gives a different company money when you ask
                  it questions.
                </LI>
              </OL>
            </Column>
          </Row>
          <Banner backgroundColor="#fff7ed">
            <P compact style={{ lineHeight: 1.5 }}>
              <b>Want us to write about your company?</b>
              <br />
              Please reach out to: <Link href="#">info@minimal.com</Link>
            </P>
          </Banner>
          <Row style={row}>
            <Column>
              <P>Until next time</P>
              <P muted>
                Best regards,
                <br /> Minimal Team
              </P>
            </Column>
          </Row>
          <Footer />
        </Container>
      </Body>
    </Html>
  );
}
