import * as React from "react";
import { cx, styles } from "@mailingui/themes";

const H1: React.FC<
  React.ComponentPropsWithoutRef<"h1"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h1
    style={cx(
      styles["global"],
      styles["headings"],
      styles["h1"],
      compact && styles["compact"],
      style
    )}
    {...props}
  />
);

const H2: React.FC<
  React.ComponentPropsWithoutRef<"h2"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h2
    style={cx(
      styles["global"],
      styles["headings"],
      styles["h2"],
      compact && styles["compact"],
      style
    )}
    {...props}
  />
);

const H3: React.FC<
  React.ComponentPropsWithoutRef<"h3"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h3
    style={cx(
      styles["global"],
      styles["headings"],
      styles["h3"],
      compact && styles["compact"],
      style
    )}
    {...props}
  />
);

const H4: React.FC<
  React.ComponentPropsWithoutRef<"h4"> & { compact?: boolean }
> = ({ compact, style, ...props }) => (
  <h4
    style={cx(
      styles["global"],
      styles["headings"],
      styles["h4"],
      compact && styles["compact"],
      style
    )}
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
    style={cx(
      styles["global"],
      styles["text"],
      styles["p"],
      compact && styles["compact"],
      lead && styles["lead"],
      small && styles["small"],
      muted && styles["muted"],
      style
    )}
    {...props}
  />
);

const Blockquote: React.FC<React.ComponentPropsWithoutRef<"blockquote">> = ({
  style,
  ...props
}) => (
  <blockquote
    style={cx(styles["global"], styles["text"], styles["blockquote"], style)}
    {...props}
  />
);

const HR: React.FC<React.ComponentPropsWithoutRef<"hr">> = ({
  style,
  ...props
}) => <hr style={cx(styles["global"], styles["hr"], style)} {...props} />;

const Code: React.FC<React.ComponentPropsWithoutRef<"code">> = ({
  style,
  ...props
}) => {
  return (
    <code style={cx(styles["global"], styles["code"], style)} {...props} />
  );
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
    style={cx(
      styles["global"],
      styles["a"],
      small && styles["small"],
      muted && styles["muted"],
      block && styles["block"],
      style
    )}
    {...props}
  />
);

const UL: React.FC<React.ComponentPropsWithoutRef<"ul">> = ({
  style,
  ...props
}) => {
  return <ul style={cx(styles["global"], styles["ul"], style)} {...props} />;
};

const OL: React.FC<React.ComponentPropsWithoutRef<"ol">> = ({
  style,
  ...props
}) => {
  return <ol style={cx(styles["global"], styles["ol"], style)} {...props} />;
};

const LI: React.FC<React.ComponentPropsWithoutRef<"li">> = ({
  style,
  ...props
}) => {
  return (
    <li
      style={cx(styles["global"], styles["text"], styles["li"], style)}
      {...props}
    />
  );
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
