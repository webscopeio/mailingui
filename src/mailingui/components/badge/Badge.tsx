"use client";

import * as React from "react";
import { VariantProps } from "@stitches/react";
import { theme, css } from "@mailingui/themes";

/** First we consume the tokens we need from our theme */
const { text, bg, rounded } = theme;

/** Then we start creating default and prop-specific styles */
const badgeStyles = css({
  /** Default Styles */
  borderRadius: rounded.md,
  border: "1px solid currentColor",
  /** Component Props */
  variants: {
    variant: {
      default: {
        // You can hover over a var and know its literal value
        color: text.default,
        backgroundColor: bg.default,
      },
      subtle: {
        color: text.subtle,
        backgroundColor: bg.subtle,
      },
      primary: {
        color: text.primary,
        backgroundColor: bg.primary,
      },
      secondary: {
        color: text.secondary,
        backgroundColor: bg.secondary,
      },
      success: {
        color: text.success,
        backgroundColor: bg.success,
      },
      warning: {
        color: text.warning,
        backgroundColor: bg.warning,
      },
      danger: {
        color: text.danger,
        backgroundColor: bg.danger,
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
        backgroundColor: text.default,
      },
      subtle: {
        backgroundColor: text.subtle,
      },
      primary: {
        backgroundColor: text.primary,
      },
      secondary: {
        backgroundColor: text.secondary,
      },
      success: {
        backgroundColor: text.success,
      },
      warning: {
        backgroundColor: text.warning,
      },
      danger: {
        backgroundColor: text.danger,
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
