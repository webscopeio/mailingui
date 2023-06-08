import { CSSProperties } from "react";

export interface Variant {
  color: CSSProperties["color"];
  backgroundColor: CSSProperties["backgroundColor"];
  borderColor?: CSSProperties["borderColor"];
}

export interface BadgeVariant extends Variant {
  dot?: boolean;
}

export interface Theme {
  fontFamily: string;
  borderRadius: number;
  buttonVariants: {
    primary: Variant;
    secondary: Variant;
    soft: Variant;
  };
  badgesVariants: {
    default: BadgeVariant;
    danger: BadgeVariant;
    success: BadgeVariant;
    info: BadgeVariant;
    warning: BadgeVariant;
  };
}

export type ButtonVariant = keyof Theme["buttonVariants"];
export type BadgeVariants = keyof Theme["badgesVariants"];
