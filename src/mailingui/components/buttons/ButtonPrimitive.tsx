// Modified implementation from react.email
// TODO: Create a PR to react.email and fix it there so we can use their Button component
import * as React from "react";

type ButtonElement = React.ElementRef<"a">;
type RootProps = React.ComponentPropsWithoutRef<"a">;

export interface ButtonProps extends RootProps {
  pX?: number;
  pY?: number;
}

export const Button = React.forwardRef<ButtonElement, Readonly<ButtonProps>>(
  ({ children, style, pX, pY, target = "_blank", ...props }, forwardedRef) => {
    return (
      <a
        {...props}
        ref={forwardedRef}
        data-id="react-email-button"
        target={target}
        style={buttonStyle({ ...style, pX, pY })}
      >
        <span style={buttonTextStyle(pY)}>{children}</span>
      </a>
    );
  }
);

Button.displayName = "Button";

const buttonStyle = (
  style?: React.CSSProperties & { pY?: number; pX?: number }
) => {
  const { pY, pX, ...rest } = style || {};

  return {
    ...rest,
    lineHeight: "100%",
    textDecoration: "none",
    display: "inline-block",
    maxWidth: "100%",
    padding: `${pY}px ${pX}px`,
  };
};

const buttonTextStyle = (pY?: number) => {
  const paddingY = pY || 0;

  return {
    maxWidth: "100%",
    display: "inline-block",
    lineHeight: "120%",
    msoPaddingAlt: "0px",
    msoTextRaise: pxToPt(paddingY.toString()),
  };
};

export const pxToPt = (px: string): number | null =>
  isNaN(Number(px)) ? null : (parseInt(px, 10) * 3) / 4;
