import * as React from "react";
import { Column, Row, Text } from "@react-email/components";
import { theme } from "@mailingui/themes";

const {
  color: { foreground, brand },
} = theme;

const sizes = {
  xs: {
    fontSize: 12,
    lineHeight: "16px",
  },
  sm: {
    fontSize: 14,
    lineHeight: "20px",
  },
  md: {
    fontSize: 16,
    lineHeight: "24px",
  },
  lg: {
    fontSize: 18,
    lineHeight: "28px",
  },
} as const;

type SizeType = keyof typeof sizes;

const variants = {
  default: {
    color: foreground["100"],
  },
  subtle: {
    color: foreground["200"],
  },
  brand: {
    color: brand,
  },
} as const;

type TextVariant = keyof typeof variants;

export type ListRootProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const ListRoot: React.FC<ListRootProps> = ({ style, children }) => {
  return <Row style={{ ...style }}>{children}</Row>;
};

type ListItemProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  horizontal?: boolean;
};

const ListItem: React.FC<ListItemProps> = ({
  style,
  horizontal = false,
  children,
}) => {
  const Wrapper = !horizontal ? Row : Column;
  return (
    <Wrapper style={{ verticalAlign: "top", ...style }}>{children}</Wrapper>
  );
};

type ListItemTitleProps = {
  centered?: boolean;
  size?: SizeType;
  style?: React.CSSProperties;
  variant?: TextVariant;
  children?: React.ReactNode;
};

const ListItemTitle: React.FC<ListItemTitleProps> = ({
  style,
  size = "md",
  centered = false,
  variant = "default",
  children,
}) => {
  return (
    <Text
      style={{
        textAlign: centered ? "center" : "inherit",
        ...variants[variant],
        ...sizes[size],
        fontWeight: 700,
        margin: 0,
        marginBottom: "4px",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

type ListItemContentProps = {
  style?: React.CSSProperties;
  size?: SizeType;
  centered?: boolean;
  variant?: TextVariant;
  children?: React.ReactNode;
};

const ListItemContent: React.FC<ListItemContentProps> = ({
  style,
  size = "md",
  centered = false,
  variant = "default",
  children,
}) => {
  return (
    <Text
      style={{
        textAlign: centered ? "center" : "inherit",
        ...variants[variant],
        ...sizes[size],
        margin: 0,
        marginBottom: "24px",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export { ListRoot, ListItem, ListItemTitle, ListItemContent };
