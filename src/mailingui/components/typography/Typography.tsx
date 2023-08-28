import * as React from "react";
import { Text as ReactEmailText } from "@react-email/components";
import { theme } from "@mailingui/themes";

const { color, typography } = theme;

interface HeadingProps extends React.ComponentPropsWithoutRef<"p"> {
  compact?: boolean;
}

const H1: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <ReactEmailText
      style={{
        fontSize: typography.baseFontSize * typography.typeScale ** 4,
        lineHeight: 1,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

const H2: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <ReactEmailText
      style={{
        fontSize: typography.baseFontSize * typography.typeScale ** 3,
        lineHeight: 1,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

const H3: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <ReactEmailText
      style={{
        fontSize: typography.baseFontSize * typography.typeScale ** 2,
        lineHeight: 1,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

const H4: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <ReactEmailText
      style={{
        fontSize: typography.baseFontSize * typography.typeScale,
        lineHeight: 1,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

interface ParagraphProps extends React.ComponentPropsWithoutRef<"p"> {
  compact?: boolean;
  small?: boolean;
  bold?: boolean;
  muted?: boolean;
}

const P: React.FC<ParagraphProps> = ({
  compact,
  small,
  bold,
  muted,
  style,
  children,
  ...props
}) => {
  return (
    <ReactEmailText
      style={{
        fontSize: small
          ? typography.baseFontSize / typography.typeScale
          : typography.baseFontSize,
        lineHeight: small ? 1.5 : 1.75,
        fontWeight: bold
          ? typography.fontWeight.bold
          : typography.fontWeight.light,
        color: muted ? color.muted.foreground : color.foreground["100"],
        margin: compact ? "6px 0" : "24px 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

const Blockquote: React.FC<React.ComponentPropsWithoutRef<"p">> = ({
  style,
  children,
  ...props
}) => {
  return (
    <ReactEmailText
      style={{
        fontStyle: "italic",
        fontSize: typography.baseFontSize,
        lineHeight: 1.75,
        fontWeight: typography.fontWeight.light,
        color: color.foreground["100"],
        margin: "24px 0 0",
        padding: "0 0 0 24px",
        borderLeft: "2px solid #525057",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailText>
  );
};

interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  block?: boolean;
}

const Link: React.FC<LinkProps> = ({ block, style, children, ...props }) => {
  return (
    <a
      style={{
        display: block ? "block" : "inline",
        fontSize: block ? typography.baseFontSize : "inherit",
        lineHeight: block ? 1.5 : "inherit",
        fontWeight: typography.fontWeight.light,
        color: block ? color.foreground["100"] : "inherit",
        margin: block ? "24px 0px" : "inherit",
        textDecoration: "underline",
        textUnderlineOffset: "8px",
        ...style,
      }}
      {...props}
    >
      {children}
    </a>
  );
};

const InlineCode: React.FC<React.ComponentPropsWithoutRef<"code">> = ({
  style,
  children,
  ...props
}) => {
  return (
    <code
      style={{
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        borderRadius: "4px",
        fontWeight: typography.fontWeight.medium,
        color: "#525057",
        backgroundColor: color.muted.background,
        padding: "3px 4px",
        ...style,
      }}
      {...props}
    >
      {children}
    </code>
  );
};

export { H1, H2, H3, H4, P, Blockquote, Link, InlineCode };
