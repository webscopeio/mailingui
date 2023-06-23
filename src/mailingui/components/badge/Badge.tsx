"use client";

import * as React from "react";
import { VariantProps } from "@stitches/react";
import { theme } from "@mailingui/themes";
import { css } from "@mailingui/utils";

/** First we consume the tokens we need from our theme */
const {
  color: { background, foreground, brand },
  rounded,
} = theme;

/** Then we start creating default and prop-specific styles */
const badgeStyles = css({
  /** Default Styles */
  borderRadius: 4,
  border: "1px solid currentColor",
  /** Component Props */
  variants: {
    variant: {
      default: {
        backgroundColor: foreground["100"],
        color: background["100"],
        border: "none",
      },
      brand: {
        backgroundColor: brand,
        color: background["100"],
        border: "none",
      },
      subtle: {
        backgroundColor: background["400"],
        color: brand,
        border: "none",
      },
      outline: {
        backgroundColor: background["100"],
        color: foreground["100"],
        border: `1px solid ${foreground["100"]}`,
      },
    },
    size: {
      sm: {
        padding: "2px 6px",
        fontSize: "12px",
      },
      md: {
        padding: "4px 10px",
        fontSize: "14px",
      },
      lg: {
        padding: "6px 12px",
        fontSize: "16px",
      },
    },
    pill: {
      true: {
        borderRadius: rounded.full,
      },
    },
    noBorder: {
      true: {
        border: "none",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    pill: false,
    noBorder: false,
  },
});

/** If any additional styles will be coupled they need to match the same variants as the main ones */
const pillSyles = css({
  variants: {
    variant: {
      default: {
        backgroundColor: background["100"],
      },
      brand: {
        backgroundColor: background["100"],
      },
      subtle: {
        backgroundColor: brand,
      },
      outline: {
        backgroundColor: foreground["100"],
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type BadgeProps = VariantProps<typeof badgeStyles> & {
  dot?: boolean;
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({
  variant,
  size,
  pill,
  noBorder,
  dot,
  children,
}) => {
  return (
    <span className={badgeStyles({ variant, size, pill, noBorder })}>
      {dot ? (
        <span
          className={pillSyles({ variant })}
          style={{
            display: "inline-block",
            height: "8px",
            width: "8px",
            marginRight: "6px",
            marginBottom: "1px",
            borderRadius: "9999px",
          }}
        />
      ) : null}
      {children}
    </span>
  );
};

export { Badge, type BadgeProps };
