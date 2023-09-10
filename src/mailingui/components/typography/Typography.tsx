import * as React from "react";

import { Theme } from "@mailingui/themes";
import { cx } from "@mailingui/utils";

const H1: React.FC<
  React.ComponentPropsWithoutRef<"h1"> & {
    compact?: boolean;
    theme?: Theme;
  }
> = ({ compact, style, theme, ...props }) => (
  <h1
    style={cx(["global", "headings", "h1", compact && "compact", style], {
      theme,
    })}
    {...props}
  />
);

const H2: React.FC<
  React.ComponentPropsWithoutRef<"h2"> & {
    compact?: boolean;
    theme?: Theme;
  }
> = ({ compact, style, theme, ...props }) => (
  <h2
    style={cx(["global", "headings", "h2", compact && "compact", style], {
      theme,
    })}
    {...props}
  />
);

const H3: React.FC<
  React.ComponentPropsWithoutRef<"h3"> & {
    compact?: boolean;
    theme?: Theme;
  }
> = ({ compact, style, theme, ...props }) => (
  <h3
    style={cx(["global", "headings", "h3", compact && "compact", style], {
      theme,
    })}
    {...props}
  />
);

const H4: React.FC<
  React.ComponentPropsWithoutRef<"h4"> & {
    compact?: boolean;
    theme?: Theme;
  }
> = ({ compact, style, theme, ...props }) => (
  <h4
    style={cx(["global", "headings", "h4", compact && "compact", style], {
      theme,
    })}
    {...props}
  />
);

const P: React.FC<
  React.ComponentPropsWithoutRef<"p"> & {
    compact?: boolean;
    lead?: boolean;
    small?: boolean;
    muted?: boolean;
    theme?: Theme;
  }
> = ({ compact, lead, small, muted, style, theme, ...props }) => (
  <p
    style={cx(
      [
        "global",
        "text",
        "p",
        compact && "compact",
        lead && "lead",
        small && "small",
        muted && "muted",
        style,
      ],
      { theme }
    )}
    {...props}
  />
);

const Blockquote: React.FC<
  React.ComponentPropsWithoutRef<"blockquote"> & { theme?: Theme }
> = ({ style, theme, ...props }) => (
  <blockquote
    style={cx(["global", "text", "blockquote", style], { theme })}
    {...props}
  />
);

const HR: React.FC<
  React.ComponentPropsWithoutRef<"hr"> & { theme?: Theme }
> = ({ style, theme, ...props }) => (
  <hr style={cx(["global", "hr", style], { theme })} {...props} />
);

const Code: React.FC<
  React.ComponentPropsWithoutRef<"code"> & { theme?: Theme }
> = ({ style, theme, ...props }) => {
  return <code style={cx(["global", "code", style], { theme })} {...props} />;
};

const Link: React.FC<
  React.ComponentPropsWithoutRef<"a"> & {
    small?: boolean;
    muted?: boolean;
    block?: boolean;
    theme?: Theme;
  }
> = ({ small, muted, block, target = "_blank", style, theme, ...props }) => (
  <a
    target={target}
    style={cx(
      [
        "global",
        "a",
        small && "small",
        muted && "muted",
        block && "block",
        style,
      ],
      { theme }
    )}
    {...props}
  />
);

const UL: React.FC<
  React.ComponentPropsWithoutRef<"ul"> & { theme?: Theme }
> = ({ style, theme, ...props }) => {
  return <ul style={cx(["global", "ul", style], { theme })} {...props} />;
};

const OL: React.FC<
  React.ComponentPropsWithoutRef<"ol"> & { theme?: Theme }
> = ({ style, theme, ...props }) => {
  return <ol style={cx(["global", "ol", style], { theme })} {...props} />;
};

const LI: React.FC<
  React.ComponentPropsWithoutRef<"li"> & { theme?: Theme }
> = ({ style, theme, ...props }) => {
  return (
    <li style={cx(["global", "text", "li", style], { theme })} {...props} />
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
