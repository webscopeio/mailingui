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
            <Column>
              <SocialIcon type="spotify" />
            </Column>
            <Column>
              <SocialIcon type="rss" />
            </Column>
            <Column>
              <SocialIcon type="houzz" />
            </Column>
            <Column>
              <SocialIcon type="goodreads" />
            </Column>
            <Column>
              <SocialIcon type="meetup" />
            </Column>
            <Column>
              <SocialIcon type="telegram" />
            </Column>
            <Column>
              <SocialIcon type="9gag" />
            </Column>
            <Column>
              <SocialIcon type="envato" />
            </Column>
          </Row>
          <Row>
            <Column>
              <SocialIcon type="google drive" />
            </Column>
            <Column>
              <SocialIcon type="git" />
            </Column>
            <Column>
              <SocialIcon type="blogger" />
            </Column>
            <Column>
              <SocialIcon type="instagram" />
            </Column>
            <Column>
              <SocialIcon type="vimeo" />
            </Column>
            <Column>
              <SocialIcon type="stack overflow" />
            </Column>
            <Column>
              <SocialIcon type="github" />
            </Column>
            <Column>
              <SocialIcon type="tinder" />
            </Column>
          </Row>
          <Row>
            <Column>
              <SocialIcon type="kakao talk" />
            </Column>
            <Column>
              <SocialIcon type="airbnb" />
            </Column>
            <Column>
              <SocialIcon type="foursquare" />
            </Column>
            <Column>
              <SocialIcon type="dropbox" />
            </Column>
            <Column>
              <SocialIcon type="tumblr" />
            </Column>
            <Column>
              <SocialIcon type="steam" />
            </Column>
            <Column>
              <SocialIcon type="product hunt" />
            </Column>
            <Column>
              <SocialIcon type="medium" />
            </Column>
          </Row>
          <Row>
            <Column>
              <SocialIcon type="behance" />
            </Column>
            <Column>
              <SocialIcon type="flickr" />
            </Column>
            <Column>
              <SocialIcon type="tiktok" />
            </Column>
            <Column>
              <SocialIcon type="devianart" />
            </Column>
            <Column>
              <SocialIcon type="google play" />
            </Column>
            <Column>
              <SocialIcon type="skype" />
            </Column>
            <Column>
              <SocialIcon type="wordpress" />
            </Column>
            <Column>
              <SocialIcon type="messenger" />
            </Column>
          </Row>
          <Row>
            <Column>
              <SocialIcon type="soundcloud" />
            </Column>
            <Column>
              <SocialIcon type="slack" />
            </Column>
            <Column>
              <SocialIcon type="twitter" />
            </Column>
            <Column>
              <SocialIcon type="discord" />
            </Column>
            <Column>
              <SocialIcon type="patreon" />
            </Column>
            <Column>
              <SocialIcon type="coderwall" />
            </Column>
            <Column>
              <SocialIcon type="linkedin" />
            </Column>
            <Column>
              <SocialIcon type="trello" />
            </Column>
          </Row>
          <Row>
            <Column>
              <SocialIcon type="angelist" />
            </Column>
            <Column>
              <SocialIcon type="badoo" />
            </Column>
            <Column>
              <SocialIcon type="dribbble" />
            </Column>
            <Column>
              <SocialIcon type="codepen" />
            </Column>
            <Column>
              <SocialIcon type="evernote" />
            </Column>
            <Column>
              <SocialIcon type="reddit" />
            </Column>
            <Column>
              <SocialIcon type="yahoo" />
            </Column>
            <Column>
              <SocialIcon type="twitch" />
            </Column>
          </Row>
          <Row>
            <Column>
              <SocialIcon type="youtube" />
            </Column>
            <Column>
              <SocialIcon type="pinterest" />
            </Column>
            <Column>
              <SocialIcon type="whatsapp" />
            </Column>
            <Column>
              <SocialIcon type="facebook" />
            </Column>
            <Column>
              <SocialIcon type="unsplash" />
            </Column>
            <Column>
              <SocialIcon type="quora" />
            </Column>
            <Column>
              <SocialIcon type="snapchat" />
            </Column>
            <Column>
              <SocialIcon type="kickstarter" />
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
