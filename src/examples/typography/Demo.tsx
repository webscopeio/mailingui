import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { H1, H2, H3, H4, P, Link, Blockquote, InlineCode } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <H1>The Joke Tax Chronicles</H1>
          <P muted compact>A story about the king and his subjects </P>
          <P>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </P>
          <H2>The King&apos;s Plan</H2>
          <P>
            The king thought long and hard, and finally came up with a{" "}
            <Link href="#">brilliant plan</Link>: he would tax the jokes in the
            kingdom.
          </P>
          <Blockquote>
            &quot;After all&quot; he said, &quot;everyone enjoys a good joke, so
            it&apos;s only fair that they should pay for the privilege.&quot;
          </Blockquote>
          <H3>The Joke Tax</H3>
          <P>
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king&apos;s
            foolishness get him down: a court jester named Jokester.
          </P>
          <H4>People stopped telling jokes</H4>
          <P>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </P>
          <P>
            Some of them were asked to install  the package: <InlineCode>npm i @jokester</InlineCode>
          </P>
          <P bold>Moral of the story: please think before telling jokes</P>
          <P small muted>
            Enter your email address for more stories like this
          </P>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  padding: "110px 0",
  maxWidth: 580,
};
