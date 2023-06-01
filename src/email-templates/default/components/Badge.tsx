import React, { CSSProperties, FC, ReactNode } from "react";

interface BadgeProps {
  variant: "default" | "danger" | "success" | "info" | "warning";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  children: ReactNode;
}

const Badge: FC<BadgeProps> = ({ variant, size = "md", children }) => {
  return (
    <span style={{ ...defaultStyle, ...variants[variant], ...sizes[size] }}>
      {children}
    </span>
  );
};

const defaultStyle = {
  border: "1px solid",
};

const sizes: Record<NonNullable<BadgeProps["size"]>, CSSProperties> = {
  sm: {
    borderRadius: 4,
    padding: "2px 6px",
    fontSize: "12px",
  },
  md: {
    borderRadius: 4,
    padding: "4px 10px",
    fontSize: "14px",
  },
  lg: {
    borderRadius: 4,
    padding: "6px 12px",
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

export default Badge;
