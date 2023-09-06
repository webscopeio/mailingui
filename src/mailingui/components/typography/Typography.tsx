import * as React from "react";
import {
  Text as ReactEmailText,
  Link as ReactEmailLink,
} from "@react-email/components";
import { theme } from "@mailingui/themes";

const { color, typography } = theme;

interface HeadingProps extends React.ComponentPropsWithoutRef<"p"> {
  compact?: boolean;
}

const H1: React.FC<React.ComponentPropsWithoutRef<"p">> = ({
  style,
  children,
  ...props
}) => {
  return (
    <h1
      style={{
        fontFamily: typography.fontFamily,
        fontSize: `${typography.baseFontSize * typography.typeScale ** 4}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale ** 4}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: 0,
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
        fontFamily: typography.fontFamily,
        fontSize: `${typography.baseFontSize * typography.typeScale ** 3}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale ** 3}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : `${typography.typeFlow * 2}px 0 0`,
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
        fontFamily: typography.fontFamily,
        fontSize: `${typography.baseFontSize * typography.typeScale ** 2}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale ** 2}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : `${typography.typeFlow * 1.5}px 0 0`,
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
        fontFamily: typography.fontFamily,
        fontSize: `${typography.baseFontSize * typography.typeScale}px`,
        lineHeight: `${typography.baseFontSize * typography.typeScale}px`,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: "-0.35px",
        color: color.foreground["100"],
        margin: compact ? "0" : `${typography.typeFlow * 1.5}px 0 0`,
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
        fontFamily: typography.fontFamily,
        fontSize: small
          ? `${typography.baseFontSize / typography.typeScale}px`
          : `${typography.baseFontSize}px`,
        lineHeight: small
          ? `${(typography.baseFontSize / typography.typeScale) * 1.75}px`
          : `${typography.baseFontSize * 2}px`,
        fontWeight: bold
          ? typography.fontWeight.bold
          : typography.fontWeight.base,
        color: muted ? color.muted.foreground : color.foreground["100"],
        margin: compact
          ? "0"
          : small
          ? `${typography.typeFlow / 2}px 0`
          : `${typography.typeFlow}px 0`,
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
        fontFamily: typography.fontFamily,
        display: block ? "block" : "inline",
        fontSize: block ? `${typography.baseFontSize}px` : "inherit",
        lineHeight: block ? `${typography.baseFontSize * 2}px` : "inherit",
        fontWeight: typography.fontWeight.base,
        color: muted ? color.muted.foreground : color.foreground["100"],
        margin: block ? "6px 0px" : "inherit",
        textDecoration: "underline",
        textUnderlineOffset: "6px",
        ...style,
      }}
      {...props}
    >
      {children}
    </ReactEmailLink>
  );
};

interface UnorderedListProps extends React.ComponentPropsWithoutRef<"ul"> {
  compact?: boolean;
}

const UL: React.FC<UnorderedListProps> = ({
  compact,
  style,
  children,
  ...props
}) => {
  return (
    <ul
      style={{
        fontFamily: typography.fontFamily,
        paddingInlineStart: "24px",
        margin: compact ? "0" : `${typography.typeFlow}px 0`,
        ...style,
      }}
      {...props}
    >
      {children}
    </ul>
  );
};

interface OrderedListProps extends React.ComponentPropsWithoutRef<"ol"> {
  compact?: boolean;
}

const OL: React.FC<OrderedListProps> = ({
  compact,
  style,
  children,
  ...props
}) => {
  return (
    <ol
      style={{
        fontFamily: typography.fontFamily,
        paddingInlineStart: "24px",
        margin: compact ? "0" : `${typography.typeFlow}px 0`,
        ...style,
      }}
      {...props}
    >
      {children}
    </ol>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"li"> {
  small?: boolean;
  bold?: boolean;
  muted?: boolean;
}

const LI: React.FC<ListItemProps> = ({
  small,
  bold,
  muted,
  style,
  children,
  ...props
}) => {
  return (
    <li
      style={{
        fontFamily: typography.fontFamily,
        fontSize: small
          ? `${typography.baseFontSize / typography.typeScale}px`
          : `${typography.baseFontSize}px`,
        lineHeight: small
          ? `${(typography.baseFontSize / typography.typeScale) * 1.75}px`
          : `${typography.baseFontSize * 2}px`,
        fontWeight: bold
          ? typography.fontWeight.bold
          : typography.fontWeight.base,
        color: muted ? color.muted.foreground : color.foreground["100"],
        margin: `${typography.typeFlow / 2}px 0`,
        ...style,
      }}
      {...props}
    >
      {children}
    </li>
  );
};

const Blockquote: React.FC<React.ComponentPropsWithoutRef<"blockquote">> = ({
  style,
  children,
}) => {
  return (
    <ReactEmailText
      style={{
        fontFamily: typography.fontFamily,
        fontStyle: "italic",
        fontSize: `${typography.baseFontSize}px`,
        lineHeight: `${typography.baseFontSize * 2}px`,
        fontWeight: typography.fontWeight.base,
        color: color.foreground["100"],
        margin: `${typography.typeFlow}px 0`,
        padding: "0 0 0 24px",
        borderLeft: "2px solid #525057",
        ...style,
      }}
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

const HR: React.FC<React.ComponentPropsWithoutRef<"hr">> = ({
  style,
  ...props
}) => {
  return (
    <hr
      style={{
        margin: `${typography.typeFlow}px 0`,
        width: "100%",
        border: "none",
        borderTop: `1px solid ${color.border}`,
        ...style,
      }}
      {...props}
    />
  );
};

export { H1, H2, H3, H4, P, Link, UL, OL, LI, Blockquote, InlineCode, HR };
