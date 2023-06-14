import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AirbnbReviewEmailProps {
  authorName?: string;
  authorImage?: string;
  reviewText?: string;
}

export const AirbnbReviewEmail = ({
  authorName = "Alex",
  reviewText = `“Zeno was a great guest! Easy communication, the apartment was left
    in great condition, very polite, and respectful of all house rules.
    He’s welcome back anytime and would easily recommend him to any
    host!”`,
}: AirbnbReviewEmailProps) => {
  const previewText = `Read ${authorName}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section style={{ paddingBottom: "20px" }}>
              <Row>
                <Text style={heading}>Here is what {authorName} wrote</Text>
                <Text style={review}>{reviewText}</Text>
                <Text style={paragraph}>
                  Now that the review period is over, we’ve posted {authorName}
                  ’s review to your Airbnb profile.
                </Text>
                <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                  While it’s too late to write a review of your own, you can
                  send your feedback to {authorName} using your Airbnb message
                  thread.
                </Text>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Row>
                <Text style={{ ...paragraph, fontWeight: "700" }}>
                  Common questions
                </Text>
                <Text>
                  <Link href="https://airbnb.com/help/article/13" style={link}>
                    How do reviews work?
                  </Link>
                </Text>
                <Text>
                  <Link
                    href="https://airbnb.com/help/article/1257"
                    style={link}
                  >
                    How do star ratings work?
                  </Link>
                </Text>
                <Text>
                  <Link href="https://airbnb.com/help/article/995" style={link}>
                    Can I leave a review after 14 days?
                  </Link>
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                  Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
                </Text>
                <Link href="https://airbnb.com" style={reportLink}>
                  Report unsafe behavior
                </Link>
              </Row>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default AirbnbReviewEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
