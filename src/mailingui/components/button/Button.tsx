"use client";

import React, { FC, ReactNode, CSSProperties } from "react";
import { VariantProps } from "@stitches/react";
// TODO: ⬇️This is just a temporary solution, create a PR to react.email so we can use their Button component
import { Button as ReactEmailButton } from "./ButtonPrimitive";
import { theme } from "@mailingui/themes";
import { css } from "@mailingui/utils";

const { bg, text, border } = theme;

const buttonStyles = css({
  /** Default Styles */
  borderRadius: 8,
  border: border.default,
  /** Component Props */
  variants: {
    variant: {
      default: {
        backgroundColor: bg.default,
        color: text.default,
      },
      primary: {
        backgroundColor: bg.primary,
        color: text.primary,
      },
      secondary: {
        backgroundColor: bg.secondary,
        color: text.secondary,
        border: border.secondary,
      },
      subtle: {
        backgroundColor: bg.subtle,
        color: text.subtle,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & {
  href: string;
  children: ReactNode;
  color?: CSSProperties["color"];
  borderColor?: CSSProperties["color"];
  rounded?: number;
  backgroundColor?: CSSProperties["backgroundColor"];
  style?: CSSProperties;
} & (
    | {
        size?: keyof typeof sizes;
        width?: never;
        height?: never;
      }
    | { width: number; height: number; size?: never }
  );

const Button: FC<ButtonProps> = ({
  rounded,
  href,
  color,
  size = "md",
  borderColor,
  children,
  backgroundColor,
  variant = "primary",
  style: styleProp,
  width,
  height,
}) => {
  const styles: CSSProperties = {
    backgroundColor: backgroundColor,
    color: color,
    borderRadius: rounded,
    fontSize: sizes[size].fontSize,
    border: borderColor,
    ...styleProp,
  };

  if (width) {
    return (
      <div>
        <span
          dangerouslySetInnerHTML={{
            __html:
              "<!--[if mso]>\n" +
              `  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:${height}px;v-text-anchor:middle;width:${width}px;" fillcolor="${backgroundColor}">\n` +
              "    <w:anchorlock/>\n" +
              `    <center style="color:${color};font-family:sans-serif;font-size:13px;font-weight:bold;">Reset password</center>\n` +
              "  </v:rect>\n" +
              "<![endif]-->",
          }}
        />
        <a
          href={href}
          className={buttonStyles({ variant, size })}
          style={
            {
              display: "inline-block",
              lineHeight: `${height}px`,
              textAlign: "center",
              width: `${width}px`,
              textDecoration: "none",
              msoHide: "all",
              ...styles,
            } as CSSProperties
          }
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <ReactEmailButton
      pX={sizes[size].paddingX}
      pY={sizes[size].paddingY}
      className={buttonStyles({ variant, size })}
      href={href}
      style={styles}
    >
      {children}
    </ReactEmailButton>
  );
};

const sizes: Record<
  NonNullable<string>,
  { fontSize: number; paddingX: number; paddingY: number }
> = {
  xs: {
    fontSize: 14,
    paddingX: 12,
    paddingY: 8,
  },
  sm: {
    fontSize: 14,
    paddingX: 14,
    paddingY: 10,
  },
  md: {
    fontSize: 16,
    paddingX: 16,
    paddingY: 10,
  },
  lg: {
    fontSize: 16,
    paddingX: 20,
    paddingY: 12,
  },
  xl: {
    fontSize: 16,
    paddingX: 24,
    paddingY: 14,
  },
  "2xl": {
    fontSize: 18,
    paddingX: 24,
    paddingY: 16,
  },
};

export { Button, type ButtonProps };
