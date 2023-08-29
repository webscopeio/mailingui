import * as React from "react";
import { Text as ReactEmailText, Link as ReactEmailLink } from "@react-email/components";
import { theme } from "@mailingui/themes";

const { color, typography } = theme;

interface HeadingProps extends React.ComponentPropsWithoutRef<"p"> {
  compact?: boolean;
}

const H1: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <h1
      style={{
        fontSize: `${typography.baseFontSize * typography.typeScale ** 4}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale ** 4}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </h1>
  );
};

const H2: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <h2
      style={{
        fontSize: `${typography.baseFontSize * typography.typeScale ** 3}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale ** 3}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

const H3: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <h3
      style={{
        fontSize: `${typography.baseFontSize * typography.typeScale ** 2}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale ** 2}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </h3>
  );
};

const H4: React.FC<HeadingProps> = ({ compact, style, children, ...props }) => {
  return (
    <h4
      style={{
        fontSize: `${typography.baseFontSize * typography.typeScale}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : "24px 0 0 0",
        ...style,
      }}
      {...props}
    >
      {children}
    </h4>
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
          ? `${typography.baseFontSize / typography.typeScale}px`
          : `${typography.baseFontSize}px`,
        lineHeight: small
          ? `${(typography.baseFontSize / typography.typeScale) * 1.75}px`
          : `${typography.baseFontSize * 2}px`,
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

interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  block?: boolean;
  muted?: boolean;
}

const Link: React.FC<LinkProps> = ({
  block,
  muted,
  style,
  children,
  ...props
}) => {
  return (
    <ReactEmailLink
      style={{
        display: block ? "block" : "inline",
        fontSize: block ? `${typography.baseFontSize}px` : "inherit",
        lineHeight: block ? `${typography.baseFontSize * 2}px` : "inherit",
        fontWeight: typography.fontWeight.light,
        color: muted ? color.muted.foreground : color.foreground["100"],
        margin: block ? "6px 0px" : "inherit",
        textDecoration: "underline",
        textUnderlineOffset: "8px",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailLink>
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
        fontSize: `${typography.baseFontSize}px`,
        lineHeight: `${typography.baseFontSize * 2}px`,
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
