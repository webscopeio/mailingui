import React, { CSSProperties, FC, ReactNode } from "react";

interface BadgeProps {
  variant: "default" | "danger" | "success" | "info" | "warning";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  pill?: boolean;
  noBorder?: boolean;
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({
  variant,
  size = "md",
  pill,
  dot,
  noBorder,
  children,
}) => {
  return (
    <span
      style={{
        border: noBorder ? "none" : "1px solid",
        ...variants[variant],
        ...sizes[size],
        ...(dot ? dotStyles : {}),
        borderRadius: pill ? 9999 : 4,
      }}
    >
      {dot ? (
        <span
          style={{
            display: "block",
            height: "6px",
            width: "6px",
            marginRight: "6px",
            marginTop: "auto",
            marginBottom: "auto",
            borderRadius: "9999px",
            backgroundColor: variants[variant].color,
          }}
        />
      ) : null}
      {children}
    </span>
  );
};

const dotStyles: React.CSSProperties = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
};

const sizes: Record<NonNullable<BadgeProps["size"]>, CSSProperties> = {
  sm: {
    padding: "2px 6px",
    fontSize: "12px",
  },
  md: {
    padding: "4px 10px",
    fontSize: "14px",
  },
  lg: {
    padding: "4px 10px",
    fontSize: "16px",
  },
};

const variants: Record<BadgeProps["variant"], CSSProperties> = {
  default: {
    borderColor: "#ecedef",
    backgroundColor: "#f9fafb",
    color: "#4b5563",
  },
  danger: {
    borderColor: "#fbe0e0",
    backgroundColor: "#fef2f2",
    color: "#b91c1c",
  },
  success: {
    borderColor: "#d1e7dd",
    backgroundColor: "#f0fdf4",
    color: "#059669",
  },
  info: {
    borderColor: "#dbeafe",
    backgroundColor: "#eff6ff",
    color: "#1e3a8a",
  },
  warning: {
    borderColor: "#f4e7c1",
    backgroundColor: "#fffbeb",
    color: "#b45309",
  },
};

export { Badge, type BadgeProps };
