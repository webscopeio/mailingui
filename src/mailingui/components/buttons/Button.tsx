import React, { FC, ReactNode, CSSProperties } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
// TODO: ⬇️This is just a temporary solution, create a PR to react.email so we can use their Button component
import { Button as ReactEmailButton } from "./ButtonPrimitive";
import { Variant } from "@mailingui/types";

interface ButtonProps {
  href: string;
  children: ReactNode;
  color?: CSSProperties["color"];
  borderColor?: CSSProperties["color"];
  rounded?: number;
  size?: keyof typeof sizes;
  backgroundColor?: CSSProperties["backgroundColor"];
  variant?: Variant;
}

const Button: FC<ButtonProps> = ({
  rounded,
  href,
  color,
  size = "md",
  borderColor,
  children,
  backgroundColor,
  variant = "primary",
}) => {
  const { variants, borderRadius } = useTheme();

  const styles: CSSProperties = {
    backgroundColor:
      backgroundColor ?? variants?.[variant]?.backgroundColor ?? "#2563EB",
    color: color ?? variants?.[variant]?.color ?? "#fff",
    borderRadius: rounded ?? borderRadius ?? 8,
    fontSize: sizes[size].fontSize,
    border: borderColor
      ? `1px solid ${borderColor}`
      : variants?.[variant].borderColor
      ? `1px solid ${variants?.[variant]?.borderColor}`
      : "none",
  };

  return (
    <ReactEmailButton
      pX={sizes[size].paddingX}
      pY={sizes[size].paddingY}
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
