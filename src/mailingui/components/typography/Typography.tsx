/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import { Theme } from "../../themes";
import { cx } from "../../utils";
import { Column, Row } from "@react-email/components";

const H1: React.FC<
  React.ComponentPropsWithoutRef<"h1"> & {
    compact?: boolean;
    theme?: Theme;
  }
> = ({ compact, theme, style, ...props }) => (
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
> = ({ compact, theme, style, ...props }) => (
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
> = ({ compact, theme, style, ...props }) => (
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
> = ({ compact, theme, style, ...props }) => (
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
> = ({ compact, lead, small, muted, theme, style, ...props }) => (
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
  React.ComponentPropsWithoutRef<"blockquote"> & {
    compact?: boolean;
    theme?: Theme;
  }
> = ({ compact, theme, style, ...props }) => (
  <blockquote
    style={cx(["global", "text", "blockquote", compact && "compact", style], {
      theme,
    })}
    {...props}
  />
);

const HR: React.FC<
  React.ComponentPropsWithoutRef<"hr"> & { theme?: Theme }
> = ({ theme, style, ...props }) => (
  <hr style={cx(["global", "hr", style], { theme })} {...props} />
);

const Code: React.FC<
  React.ComponentPropsWithoutRef<"code"> & { theme?: Theme }
> = ({ theme, style, ...props }) => (
  <code style={cx(["global", "code", style], { theme })} {...props} />
);

const Link: React.FC<
  React.ComponentPropsWithoutRef<"a"> & {
    small?: boolean;
    muted?: boolean;
    block?: boolean;
    theme?: Theme;
  }
> = ({ small, muted, block, target = "_blank", theme, style, ...props }) => (
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
> = ({ theme, style, ...props }) => (
  <ul style={cx(["global", "ul", style], { theme })} {...props} />
);

const OL: React.FC<
  React.ComponentPropsWithoutRef<"ol"> & { theme?: Theme }
> = ({ theme, style, ...props }) => (
  <ol style={cx(["global", "ol", style], { theme })} {...props} />
);

const LI: React.FC<
  React.ComponentPropsWithoutRef<"li"> & { theme?: Theme }
> = ({ theme, style, ...props }) => (
  <li style={cx(["global", "text", "li", style], { theme })} {...props} />
);

const Img: React.FC<
  React.ComponentPropsWithoutRef<"img"> & {
    caption?: string;
    compact?: boolean;
    theme?: Theme;
  }
> = ({ caption, compact, theme, alt, src, width, height, style, ...props }) => {
  if (!caption)
    return (
      <img
        alt={alt}
        src={src}
        width={width}
        height={height}
        {...props}
        style={cx(
          [
            "global",
            "img",
            Boolean(caption) && "compact",
            compact && "compact",
            style,
          ],
          {
            theme,
          }
        )}
      />
    );
  return (
    <figure style={cx(["figure"], { theme })}>
      <Row
        width={width}
        style={cx(
          [
            "global",
            "img",
            Boolean(caption) && "compact",
            Boolean(caption) && {
              marginBottom: 0,
              paddingBottom: 0,
            },
            compact && "compact",
            { height },
            style,
          ],
          {
            theme,
          }
        )}
      >
        <Column height={height}>
          <img alt={alt} src={src} width={width} height={height} {...props} />
        </Column>
      </Row>

      <figcaption
        style={cx(
          [
            "global",
            "text",
            "small",
            "muted",
            compact && "compact",
            "figcaption",
          ],
          {
            theme,
          }
        )}
      >
        {caption}
      </figcaption>
    </figure>
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
  Img,
};

export { H1, H2, H3, H4, P, Blockquote, HR, Code, Link, UL, OL, LI, Img };
