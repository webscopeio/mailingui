import React, { FC, ReactNode, CSSProperties, useContext } from "react";
import { Button as ReactEmailButton } from "./ReactEmailButtonFork";
import { ThemeContext } from "@mailingui/components";

type sizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface ButtonProps {
  href: string;
  children: ReactNode;
  color?: CSSProperties["color"];
  borderColor?: CSSProperties["color"];
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  size?: sizes;
  backgroundColor?: CSSProperties["backgroundColor"];
}

const Button: FC<ButtonProps> = ({
  rounded = "md",
  href,
  color,
  size = "md",
  borderColor,
  children,
  backgroundColor,
}) => {
  const context = useContext(ThemeContext);

  const styles: CSSProperties = {
    backgroundColor: backgroundColor ?? context?.primaryColor ?? "#24292e",
    color: color ?? "#ffffff",
    borderRadius: roundedEnum[rounded],
    fontSize: sizesEnum[size].fontSize,
    border: borderColor ? `1px solid ${borderColor}` : "none",
  };

  return (
    <ReactEmailButton
      pX={sizesEnum[size].paddingX}
      pY={sizesEnum[size].paddingY}
      href={href}
      style={styles}
    >
      {children}
    </ReactEmailButton>
  );
};

const sizesEnum: Record<
  sizes,
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

const roundedEnum: Record<string, number> = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
};

export { Button, type ButtonProps };
