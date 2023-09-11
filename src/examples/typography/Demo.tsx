import * as React from "react";
import { Body, Container, Html } from "@react-email/components";
import { Typography } from "@mailingui/components";

export default function Demo() {
  return (
    <Html>
      <Body style={body}>
        <Container style={container}>
          <Typography.H1>The Joke Tax Chronicles</Typography.H1>
          <Typography.P lead>
            A story about the king and his subjects
          </Typography.P>
          <Typography.Img
            caption="Once upon a time"
            alt="Code Image"
            src="https://plus.unsplash.com/premium_photo-1678565999588-08fdd0b1410b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2494&q=80"
          />
          <Typography.P>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </Typography.P>
          <Typography.H2>The King&apos;s Plan</Typography.H2>
          <Typography.P>
            The king thought long and hard, and finally came up with a{" "}
            <Typography.Link href="#">brilliant plan</Typography.Link>: he would
            tax the jokes in the kingdom.
          </Typography.P>
          <Typography.Blockquote>
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&apos;s only fair that they should pay for the privilege.&quot;
          </Typography.Blockquote>
          <Typography.H3>The Joke Tax</Typography.H3>
          <Typography.P>
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king&apos;s
            foolishness get him down: a court jester named Jokester.
          </Typography.P>
          <Typography.H4>People stopped telling jokes</Typography.H4>
          <Typography.P>
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </Typography.P>
          <Typography.P>
            Some of them were asked to install the package:{" "}
            <Typography.Code>npm i @jokester</Typography.Code>
          </Typography.P>
          <Typography.H2>Lessons from Jokester: The Top Jokes</Typography.H2>
          <Typography.P>
            Jokester had a repertoire of hilarious jokes that brought joy to the
            kingdom. Here are some of the funniest ones:
          </Typography.P>
          <Typography.OL>
            <Typography.LI>
              Why don&apos;t scientists trust atoms? Because they make up
              everything!
            </Typography.LI>
            <Typography.LI>
              Parallel lines have so much in common. It&apos;s a shame
              they&apos;ll never meet.
            </Typography.LI>
            <Typography.LI>
              How do you organize a space party? You &quot;planet&quot;!
            </Typography.LI>
          </Typography.OL>
          <Typography.P>
            Jokester&apos;s jokes were legendary and brought laughter to all
            corners of the kingdom.
          </Typography.P>
          <Typography.H2>Jokester&apos;s Words of Wisdom</Typography.H2>
          <Typography.P>
            Jokester shared his insightful thoughts that resonated with the
            kingdom&apos;s subjects:
          </Typography.P>
          <Typography.UL>
            <Typography.LI>
              Laughter is the best medicine for any gloomy day.
            </Typography.LI>
            <Typography.LI>
              Spreading smiles can brighten even the darkest of times.
            </Typography.LI>
            <Typography.LI>
              Humor unites people, regardless of their backgrounds.
            </Typography.LI>
          </Typography.UL>
          <Typography.P>
            Jokester&apos;s wisdom touched hearts and lifted spirits across the
            land.
          </Typography.P>
          <Typography.P>
            <b>Moral of the story: please think before telling jokes</b>
          </Typography.P>
          <Typography.P small muted>
            Enter your email address for more stories like this
          </Typography.P>
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
