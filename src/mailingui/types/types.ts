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
  fontFamily?: string;
  borderRadius?: number;
  buttonVariants?: ButtonVariants;
  badgesVariants?: BadgeVariants;
}

type ButtonVariants = {
  primary: Variant;
  secondary: Variant;
  soft: Variant;
};

type BadgeVariants = {
  default: BadgeVariant;
  danger: BadgeVariant;
  success: BadgeVariant;
  info: BadgeVariant;
  warning: BadgeVariant;
};

export type ButtonVariantKey = keyof ButtonVariants;
export type BadgeVariantsKey = keyof BadgeVariants;
