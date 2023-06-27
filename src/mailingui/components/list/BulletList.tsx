"use client";

import React, {
  FC,
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
} from "react";
import { theme } from "@mailingui/themes";

const {
  color: { foreground, brand },
} = theme;

const variants = {
  default: {
    color: foreground["100"],
  },
  subtle: {
    color: foreground["200"],
  },
  brand: {
    color: brand,
  },
};

const sizes: Record<"xs" | "sm" | "md" | "lg", CSSProperties> = {
  xs: {
    fontSize: 12,
    lineHeight: "16px",
  },
  sm: {
    fontSize: 14,
    lineHeight: "20px",
  },
  md: {
    fontSize: 16,
    lineHeight: "24px",
  },
  lg: {
    fontSize: 18,
    lineHeight: "28px",
  },
};

type BulletListContextType = {
  size: keyof typeof sizes;
};

const BulletListContext = createContext<BulletListContextType>({
  size: "md",
});

type BulletListProps = {
  type: "unordered" | "ordered";
  style?: CSSProperties;
  children?: ReactNode;
  size?: keyof typeof sizes;
};

const BulletList: FC<BulletListProps> = ({ type, size, style, children }) => {
  const ListRoot = type === "unordered" ? "ul" : "ol";
  const contextValue: BulletListContextType = {
    size: size ?? "md",
  };

  return (
    <BulletListContext.Provider value={contextValue}>
      <ListRoot
        style={{
          paddingLeft: 20,
          ...style,
        }}
      >
        {children}
      </ListRoot>
    </BulletListContext.Provider>
  );
};

type BulletListItemProps = {
  variant?: keyof typeof variants;
  children?: ReactNode;
  style?: CSSProperties;
  size?: keyof typeof sizes;
};

const BulletListItem: FC<BulletListItemProps> = ({
  variant = "default",
  style: styleProp,
  size = "md",
  children,
}) => {
  const { size: sizeContext } = useContext(BulletListContext);

  const style: CSSProperties = {
    padding: "2px 0",
    ...variants[variant],
    ...sizes[size ?? sizeContext],
    ...styleProp,
  };

  return <li style={style}>{children}</li>;
};

export { BulletList, type BulletListProps, BulletListItem };
