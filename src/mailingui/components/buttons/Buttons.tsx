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
  pill?: boolean;
}

const Button: FC<ButtonProps> = ({
  paddingX,
  paddingY,
  pill,
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
    borderRadius: pill ? 9999 : 4,
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

export { Button, type ButtonProps };
