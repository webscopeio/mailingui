import React, { CSSProperties, FC, ReactNode } from "react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import { Variant } from "@mailingui/types";

interface BadgeProps {
  variant?: Variant;
  size?: keyof typeof sizes;
  dot?: boolean;
  pill?: boolean;
  noBorder?: boolean;
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({
  variant = "default",
  size = "md",
  pill,
  dot,
  noBorder,
  children,
}) => {
  const { variants } = useTheme();

  return (
    <span
      style={{
        border:
          noBorder || !variants?.[variant]?.borderColor ? "none" : "1px solid",
        ...variants?.[variant],
        ...sizes[size],
        borderRadius: pill ? 9999 : 4,
      }}
    >
      {dot ? (
        <span
          style={{
            display: "inline-block",
            height: "6px",
            width: "6px",
            marginRight: "6px",
            marginBottom: sizes[size].dotMarginBottom ?? "0px",
            borderRadius: "9999px",
            backgroundColor: variants?.[variant]?.color,
          }}
        />
      ) : null}
      {children}
    </span>
  );
};

const sizes: Record<
  NonNullable<string>,
  CSSProperties & { dotMarginBottom: CSSProperties["marginBottom"] }
> = {
  sm: {
    padding: "2px 6px",
    fontSize: "12px",
    dotMarginBottom: "1px",
  },
  md: {
    padding: "4px 10px",
    fontSize: "14px",
    dotMarginBottom: "2px",
  },
  lg: {
    padding: "6px 12px",
    fontSize: "16px",
    dotMarginBottom: "3px",
  },
};

export { Badge, type BadgeProps };
