import * as React from "react";
import { cx } from "@mailingui/utils";

const H1: React.FC<
  React.ComponentPropsWithoutRef<"h1"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h1
    style={cx(["global", "headings", "h1", compact && "compact", style])}
    {...props}
  />
);

const H2: React.FC<
  React.ComponentPropsWithoutRef<"h2"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h2
    style={cx(["global", "headings", "h2", compact && "compact", style])}
    {...props}
  />
);

const H3: React.FC<
  React.ComponentPropsWithoutRef<"h3"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h3
    style={cx(["global", "headings", "h3", compact && "compact", style])}
    {...props}
  />
);

const H4: React.FC<
  React.ComponentPropsWithoutRef<"h4"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h4
    style={cx(["global", "headings", "h4", compact && "compact", style])}
    {...props}
  />
);

const P: React.FC<
  React.ComponentPropsWithoutRef<"p"> & {
    compact?: boolean;
    lead?: boolean;
    small?: boolean;
    muted?: boolean;
  }
> = ({ compact, lead, small, muted, style, ...props }) => (
  <p
    style={cx([
      "global",
      "text",
      "p",
      compact && "compact",
      lead && "lead",
      small && "small",
      muted && "muted",
      style,
    ])}
    {...props}
  />
);

const Blockquote: React.FC<React.ComponentPropsWithoutRef<"blockquote">> = ({
  style,
  ...props
}) => (
  <blockquote style={cx(["global", "text", "blockquote", style])} {...props} />
);

const HR: React.FC<React.ComponentPropsWithoutRef<"hr">> = ({
  style,
  ...props
}) => <hr style={cx(["global", "hr", style])} {...props} />;

const Code: React.FC<React.ComponentPropsWithoutRef<"code">> = ({
  style,
  ...props
}) => {
  return <code style={cx(["global", "code", style])} {...props} />;
};

const Link: React.FC<
  React.ComponentPropsWithoutRef<"a"> & {
    small?: boolean;
    muted?: boolean;
    block?: boolean;
  }
> = ({ small, muted, block, target = "_blank", style, ...props }) => (
  <a
    target={target}
    style={cx([
      "global",
      "text",
      "a",
      small && "small",
      muted && "muted",
      block && "block",
      style,
    ])}
    {...props}
  />
);

const UL: React.FC<React.ComponentPropsWithoutRef<"ul">> = ({
  style,
  ...props
}) => {
  return <ul style={cx(["global", "ul", style])} {...props} />;
};

const OL: React.FC<React.ComponentPropsWithoutRef<"ol">> = ({
  style,
  ...props
}) => {
  return <ol style={cx(["global", "ol", style])} {...props} />;
};

const LI: React.FC<React.ComponentPropsWithoutRef<"li">> = ({
  style,
  ...props
}) => {
  return <li style={cx(["global", "text", "li", style])} {...props} />;
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  HR,
  Code,
  Link,
  UL,
  OL,
  LI,
};

export { H1, H2, H3, H4, P, Blockquote, HR, Code, Link, UL, OL, LI };
