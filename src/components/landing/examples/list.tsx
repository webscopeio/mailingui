import * as React from "react";
import { Container } from "@react-email/components";
import {
  ListRoot,
  ListItem,
  ListItemTitle,
  ListItemContent,
} from "@mailingui/components";

export default function CombinedLists() {
  return (
    <div style={main}>
      <div className="p-7">
        <Container style={container}>
          <ListRoot>
            <ListItem horizontal style={{ paddingRight: "16px" }}>
              <ListItemTitle>Highlighting</ListItemTitle>
              <ListItemContent style={{ marginBottom: "20px" }}>
                Performant syntax highlighting.
              </ListItemContent>
            </ListItem>
            <ListItem horizontal>
              <ListItemTitle>I18n</ListItemTitle>
              <ListItemContent style={{ marginBottom: "20px" }}>
                Just add locales.
              </ListItemContent>
            </ListItem>
          </ListRoot>
          <ListRoot>
            <ListItem>
              <ListItemTitle>
                Full-text search, zero-config needed
              </ListItemTitle>
              <ListItemContent style={{ marginBottom: 0 }}>
                Incredibly fast full-text search.
              </ListItemContent>
            </ListItem>
          </ListRoot>
        </Container>
      </div>
    </div>
  );
}

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  borderRadius: "8px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color SocialIcon","Segoe UI SocialIcon"',
};

const container = {
  padding: "100px 0",
  maxWidth: 330,
};
