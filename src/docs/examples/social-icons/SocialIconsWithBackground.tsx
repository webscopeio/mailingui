import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Column,
} from "@react-email/components";
import { SocialIcon } from "@mailingui/components";

export default function AllSocialIcons() {
  return (
    <Html>
      <Head />
      <Preview>All Social Icons</Preview>
      <Body style={main}>
        <Container style={container}>
          <Row>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="spotify" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="rss" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="houzz" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="goodreads" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="meetup" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="telegram" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="9gag" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="envato" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="google drive" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="git" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="blogger" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="instagram" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="vimeo" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="stack overflow" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="github" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="tinder" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="kakao talk" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="airbnb" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="foursquare" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="dropbox" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="tumblr" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="steam" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="product hunt" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="medium" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="behance" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="flickr" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="tiktok" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="devianart" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="google play" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="skype" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="wordpress" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="messenger" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="soundcloud" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="slack" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="twitter" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="discord" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="patreon" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="coderwall" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="linkedin" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="trello" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="angelist" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="badoo" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="dribbble" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="codepen" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="evernote" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="reddit" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="yahoo" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="twitch" bg />
            </Column>
          </Row>
          <Row>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="youtube" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="pinterest" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="whatsapp" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="facebook" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="unsplash" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="quora" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="snapchat" bg />
            </Column>
            <Column style={{ padding: "5px" }}>
              <SocialIcon type="kickstarter" bg />
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color SocialIcon","Segoe UI SocialIcon"',
};

const container = {
  padding: "55px 0",
  textAlign: "center" as const,
  maxWidth: 580,
};
