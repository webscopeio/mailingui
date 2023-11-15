import * as React from "react";
import { Column, Row } from "@react-email/components";

import { Wrapper } from "./components/Wrapper";
import { OrderHeader } from "./components/OrderHeader";
import { OrderItem } from "./components/OrderItem";
import { OrderTotal } from "./components/OrderTotal";
import { Rating } from "./components/Rating";
import { Badge } from "./components/Badge";

import { colors, theme } from "./theme";

import { Button, H1, H2, HR } from "@mailingui/components";
import { remToPx } from "@mailingui/themes";

export const body: React.CSSProperties = {
  backgroundColor: "#fafafa", // Background color outside container
  margin: 0, // Margin reset
};

export const container: React.CSSProperties = {
  backgroundColor: "#fff", // Email background color
  maxWidth: remToPx(37.5), // Estalbish the maximum size of the email
};

export const row: React.CSSProperties = {
  padding: `0 ${remToPx(2.5)}`, // Here we can enable the default padding for each table AKA rows
};

export const hr: React.CSSProperties = {
  margin: `${remToPx(2.5)} 0`,
};

export const spacer: React.CSSProperties = {
  width: "100%",
  display: "inline-block",
  marginTop: 0,
  borderTop: `1px solid ${colors.primary}`,
  color: colors.primary,
};

export const code: React.CSSProperties = {
  color: colors.primary,
  margin: 0,
  fontSize: remToPx(2.5),
  lineHeight: remToPx(2.5),
};

export const block: React.CSSProperties = {
  backgroundColor: colors["muted-background"],
  borderRadius: remToPx(1),
  padding: `${remToPx(2)} 0`,
};

export const getSharedMDXComponents = ({
  headerHeading,
  feedbackFooter,
  isNewsletter,
}: {
  headerHeading?: string;
  feedbackFooter?: boolean;
  isNewsletter?: boolean;
}) => ({
  wrapper: (props: any) => (
    <Wrapper
      {...props}
      headerHeading={headerHeading}
      feedbackFooter={feedbackFooter}
      isNewsletter={isNewsletter}
    />
  ),
  h1: (props: any) => (!headerHeading ? <H1 {...props} theme={theme} /> : null),
  h2: (props: any) => (
    <H2 {...props} theme={theme} style={{ color: colors.primary }} />
  ),
  Button: (props: any) => (
    <Row style={{ paddingBottom: remToPx(1.5) }}>
      <Column>
        <Button rounded {...props} theme={theme} style={{ marginBottom: 0 }} />
      </Column>
    </Row>
  ),
  Spacer: (props: any) => (
    <Row>
      <Column>
        <HR {...props} theme={theme} style={spacer} align="left" />
      </Column>
    </Row>
  ),
  ColoredBlock: (props: any) => (
    <>
      <Row>
        <Column>
          <HR theme={theme} style={spacer} />
        </Column>
      </Row>
      <H2 theme={theme} style={{ color: colors.primary }}>
        {props.code}
      </H2>
      <Row>
        <Column>
          <HR theme={theme} style={spacer} />
        </Column>
      </Row>
    </>
  ),
  HR: (props: any) => (
    <Row>
      <Column>
        <HR {...props} theme={theme} />
      </Column>
    </Row>
  ),
  Items: (props: any) => (
    <>
      {props.items.map((item: any, index: any) => (
        <OrderItem key={[item.title, index].join()} {...item} index={index} />
      ))}
    </>
  ),
  OrderHeader: (props: any) => <OrderHeader {...props} />,
  Total: (props: any) => <OrderTotal {...props} />,
  Rating: (props: any) => <Rating {...props} />,
  Badge: (props: any) => <Badge {...props} />,
});
