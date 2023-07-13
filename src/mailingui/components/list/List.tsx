"use client";

import { FC, CSSProperties, ReactNode, createContext, useContext } from "react";
import { Column, Row, Text } from "@react-email/components";
import { theme } from "@mailingui/themes";

const {
  color: { foreground, brand },
} = theme;

const sizes = {
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
} as const;

type SizeType = keyof typeof sizes;

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
} as const;

type TextVariant = keyof typeof variants;

type ListContextType = {
  direction: "vertical" | "horizontal";
  centered: boolean;
  size: SizeType;
  titleSize?: SizeType;
  titleStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
};

const ListContext = createContext<ListContextType>({
  direction: "vertical",
  centered: false,
  size: "md",
  titleSize: undefined,
});

export type ListRootProps = {
  centered?: boolean;
  titleSize?: SizeType;
  size?: SizeType;
  style?: CSSProperties;
  titleStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  children?: ReactNode;
  horizontal?: boolean;
};

const ListRoot: FC<ListRootProps> = ({
  style,
  size,
  centered,
  titleSize,
  horizontal,
  titleStyle,
  bodyStyle,
  children,
}) => {
  const contextValue: ListContextType = {
    direction: horizontal ? "horizontal" : "vertical",
    centered: !!centered,
    size: size ?? "md",
    titleSize,
    titleStyle,
    bodyStyle,
  };

  return (
    <ListContext.Provider value={contextValue}>
      <Row style={{ ...style }}>{children}</Row>
    </ListContext.Provider>
  );
};

type ListItemContextType = {
  variant: TextVariant;
  size: SizeType;
};

const ListItemContext = createContext<ListItemContextType>({
  variant: "default",
  size: "md",
});

type ListItemProps = {
  style?: CSSProperties;
  children?: ReactNode;
  variant?: TextVariant;
  size?: SizeType;
};

const ListItem: FC<ListItemProps> = ({
  style,
  variant = "default",
  size,
  children,
}) => {
  const { direction, size: sizeContext } = useContext(ListContext);
  const Wrapper = direction === "vertical" ? Row : Column;

  const itemContextValue: ListItemContextType = {
    variant,
    size: size ?? sizeContext,
  };

  return (
    <ListItemContext.Provider value={itemContextValue}>
      <Wrapper style={{ verticalAlign: "top", ...style }}>{children}</Wrapper>
    </ListItemContext.Provider>
  );
};

type ListItemTitleProps = {
  centered?: boolean;
  size?: SizeType;
  style?: CSSProperties;
  variant?: TextVariant;
  children?: ReactNode;
};

const ListItemTitle: FC<ListItemTitleProps> = ({
  centered,
  size,
  style,
  variant,
  children,
}) => {
  const {
    centered: centeredContext,
    titleSize: titleSizeContext,
    titleStyle: titleStyleContext,
  } = useContext(ListContext);
  const { variant: variantContext, size: sizeContext } =
    useContext(ListItemContext);

  return (
    <Text
      style={{
        textAlign: centered ?? centeredContext ? "center" : "inherit",
        ...variants[variant ?? variantContext],
        ...sizes[size ?? titleSizeContext ?? sizeContext],
        fontWeight: 700,
        margin: 0,
        marginBottom: "4px",
        ...titleStyleContext,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

type ListItemContentProps = {
  style?: CSSProperties;
  size?: SizeType;
  centered?: boolean;
  variant?: TextVariant;
  children?: ReactNode;
};

const ListItemContent: FC<ListItemContentProps> = ({
  style,
  size,
  centered,
  variant,
  children,
}) => {
  const { centered: centeredContext, bodyStyle: bodyStyleContext } =
    useContext(ListContext);
  const { variant: variantContext, size: sizeContext } =
    useContext(ListItemContext);

  return (
    <Text
      style={{
        textAlign: centered ?? centeredContext ? "center" : "inherit",
        ...variants[variant ?? variantContext],
        ...sizes[size ?? sizeContext],
        margin: 0,
        marginBottom: "24px",
        ...bodyStyleContext,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export { ListRoot, ListItem, ListItemTitle, ListItemContent };
