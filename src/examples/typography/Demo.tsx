import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import {
  H1,
  H2,
  H3,
  H4,
  P,
  Link,
  Blockquote,
  Code,
  OL,
  LI,
  UL,
} from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <H1>The Joke Tax Chronicles</H1>
          <P lead>
            A story about the king and his subjects
          </P>
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
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&apos;s only fair that they should pay for the privilege.&quot;
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
            Some of them were asked to install the package:{" "}
            <Code>npm i @jokester</Code>
          </P>
          <H2>Lessons from Jokester: The Top Jokes</H2>
          <P>
            Jokester had a repertoire of hilarious jokes that brought joy to the
            kingdom. Here are some of the funniest ones:
          </P>
          <OL>
            <LI>
              Why don&apos;t scientists trust atoms? Because they make up
              everything!
            </LI>
            <LI>
              Parallel lines have so much in common. It&apos;s a shame
              they&apos;ll never meet.
            </LI>
            <LI>How do you organize a space party? You &quot;planet&quot;!</LI>
          </OL>
          <P>
            Jokester&apos;s jokes were legendary and brought laughter to all
            corners of the kingdom.
          </P>
          <H2>Jokester&apos;s Words of Wisdom</H2>
          <P>
            Jokester shared his insightful thoughts that resonated with the
            kingdom&apos;s subjects:
          </P>
          <UL>
            <LI>Laughter is the best medicine for any gloomy day.</LI>
            <LI>Spreading smiles can brighten even the darkest of times.</LI>
            <LI>Humor unites people, regardless of their backgrounds.</LI>
          </UL>
          <P>
            Jokester&apos;s wisdom touched hearts and lifted spirits across the
            land.
          </P>
          <P><b>Moral of the story: please think before telling jokes</b></P>
          <P small muted>
            Enter your email address for more stories like this
          </P>
        </Container>
      </Body>
    </Html>
  );
}

export const body: React.CSSProperties = {
  backgroundColor: "#fff", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  padding: "60px 30px",
  maxWidth: "600px", // Estalbish the maximum size of the email
};