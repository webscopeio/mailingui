import React, { CSSProperties, FC, ReactNode } from "react";
import { useTheme } from "../../hooks/useTheme";
import { BadgeVariantsKey } from "@mailingui/types";

interface BadgeProps {
  variant?: BadgeVariantsKey;
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
  const theme = useTheme();

  return (
    <span
      style={{
        border: noBorder ? "none" : "1px solid",
        ...theme?.badgesVariants?.[variant],
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
            backgroundColor: theme?.badgesVariants?.[variant]?.color,
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
