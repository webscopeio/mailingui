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
import { H1, H2, P, HR, OL, LI, Link } from "@mailingui/components";

export default function SubscriptionSuccess({
  preview = "Turbo goes all-in on the edge",
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
              <P style={{ marginTop: 0 }}>
                <b>Today&apos;s issue</b>: Prizz nation gets a speed boost,
                invisible UI details make our hearts happy, and the JavaScript
                musical that has audiences foaming at the mouth.
              </P>
              <P>
                Welcome to <Link href="#">#420</Link>
              </P>
              <HR />
              <H1>{preview}</H1>
              <div style={{ margin: "24px 0" }}>
                <Img
                  width={"100%"}
                  src={`${baseUrl}/newsletter/developer.jpg`}
                  alt="The Minimalist"
                />
                <P style={{ textAlign: "center" }} compact muted>
                  Lights, Camera, Action
                </P>
              </div>
              <P>
                <b>16 months ago</b>, we wrote about how a startup called
                ChiselStrike was building a serverless platform that let you
                create RESTful backends with simple TypeScript definitions.
              </P>
              <P>
                <b>10 months later</b>, they launched a private beta of Turbo —
                an edge-hosted, distributed DB that lets you bring your data to
                the edge with their forked version SQLite called libSQL.
              </P>
              <P>
                That got a lot of folks real excited — because running your app
                on the edge is great, but it won&apos;t actually be any faster
                unless your data is on the edge too. And Turbo gave us all a
                pretty easy way to do that.
              </P>
              <P>
                Fast forward to today, and the team has become much more
                well-known for Turbo than for their OG ChiselStrike platform. So
                they decided to embrace the wisdom of the crowd by changing
                their name to Turbo and focusing 100% of their efforts on the
                edge DB platform.
              </P>
              <P>
                Some might call this selling out, but hey — nobody knew who
                Stefani Germanotta was until she started making pop hits for the
                masses and changed her name to Lady Gaga.
              </P>
              <HR />
              <H2>Latest news</H2>
              <div style={{ margin: "24px 0" }}>
                <Img
                  width={"100%"}
                  src={`${baseUrl}/newsletter/latest-news.jpg`}
                  alt="The Minimalist"
                />
                <P style={{ textAlign: "center" }} compact muted>
                  What you working on?
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
          <Footer />
        </Container>
      </Body>
    </Html>
  );
}
