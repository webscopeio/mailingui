import { CSSProperties } from "react";

export interface VariantValue {
  color: CSSProperties["color"];
  backgroundColor: CSSProperties["backgroundColor"];
  borderColor?: CSSProperties["borderColor"];
}

export interface Theme {
  fontFamily: CSSProperties["fontFamily"];
  borderRadius: CSSProperties["borderRadius"];
  variants: {
    default: VariantValue;
    primary: VariantValue;
    secondary: VariantValue;
    subtle: VariantValue;
    success: VariantValue;
    danger: VariantValue;
    warning: VariantValue;
  };
}

export type Variant = keyof Theme["variants"];
