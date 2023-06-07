import React, { FC, ReactNode, CSSProperties } from "react";
import { Button as ReactEmailButton } from "@react-email/components";

interface ButtonProps {
  paddingX?: number;
  paddingY?: number;
  href: string;
  children: ReactNode;
  backgroundColor?: CSSProperties["color"];
  fontSize?: CSSProperties["fontSize"];
  color?: CSSProperties["color"];
  borderColor?: CSSProperties["color"];
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

const Button: FC<ButtonProps> = ({
  paddingX,
  paddingY,
  rounded = "md",
  href,
  backgroundColor,
  color,
  fontSize,
  borderColor,
  children,
}) => {
  const styles: CSSProperties = {
    backgroundColor: backgroundColor ?? "#24292e",
    color: color ?? "#ffffff",
    borderRadius: roundedEnum[rounded],
    fontSize: fontSize,
    border: borderColor ? `1px solid ${borderColor}` : "none",
  };

  return (
    <ReactEmailButton
      pX={paddingX ?? 12}
      pY={paddingY ?? 6}
      href={href}
      style={styles}
    >
      {children}
    </ReactEmailButton>
  );
};

const roundedEnum: Record<string, number> = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
  full: 9999,
};

export { Button, type ButtonProps };
