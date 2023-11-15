import { Column, Row, Section } from "@react-email/components";

import { theme } from "../theme";

import * as components from "@mailingui/components";
import { applyTheme } from "@mailingui/utils";

const { P, Img } = applyTheme(components, theme);

export const Badge = ({
  alt,
  src,
  name,
}: {
  src: string;
  alt?: string;
  name: string;
}) => {
  return (
    <Section align="center" width="200">
      <Row style={{ paddingBottom: "16px" }}>
        <Column align="center">
          <Img
            src={src}
            alt={alt}
            width="96"
            height="96"
            style={{
              marginBottom: 0,
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column align="center">
          <P compact>{name}</P>
        </Column>
      </Row>
    </Section>
  );
};
