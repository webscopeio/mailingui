import * as React from "react";
import { theme } from "@mailingui/themes";

const {
  color: { foreground, brand },
} = theme;

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
};

const sizes: Record<"xs" | "sm" | "md" | "lg", React.CSSProperties> = {
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
};

type BulletListProps = {
  type: "unordered" | "ordered";
  style?: React.CSSProperties;
  children?: React.ReactNode;
  size?: keyof typeof sizes;
};

const BulletList: React.FC<BulletListProps> = ({ type, style, children }) => {
  const ListRoot = type === "unordered" ? "ul" : "ol";

  return (
    <ListRoot
      style={{
        paddingLeft: 20,
        ...style,
      }}
    >
      {children}
    </ListRoot>
  );
};

type BulletListItemProps = {
  variant?: keyof typeof variants;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  size?: keyof typeof sizes;
};

const BulletListItem: React.FC<BulletListItemProps> = ({
  variant = "default",
  style: styleProp,
  size = "md",
  children,
}) => {
  const style: React.CSSProperties = {
    padding: "2px 0",
    ...variants[variant],
    ...sizes[size],
    ...styleProp,
  };

  return <li style={style}>{children}</li>;
};

export { BulletList, type BulletListProps, BulletListItem };
