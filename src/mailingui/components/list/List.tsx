"use client";

import React, {
  FC,
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
} from "react";
import { Column, Row } from "@react-email/components";
import { Text, type TextProps } from "@mailingui/components";
import { type Variant } from "@mailingui/themes";

type ListContextType = {
  direction: "vertical" | "horizontal";
  centered: boolean;
  size: TextProps["size"];
  titleSize?: TextProps["size"];
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
  titleSize?: TextProps["size"];
  size?: TextProps["size"];
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
  variant: Variant;
  size: TextProps["size"];
};

const ListItemContext = createContext<ListItemContextType>({
  variant: "default",
  size: "md",
});

type ListItemProps = {
  style?: CSSProperties;
  children?: ReactNode;
  variant?: Variant;
  size?: TextProps["size"];
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
  size?: TextProps["size"];
  style?: CSSProperties;
  variant?: Variant;
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
      centered={centered ?? centeredContext}
      size={size ?? titleSizeContext ?? sizeContext}
      variant={variant ?? variantContext}
      style={{
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
  size?: TextProps["size"];
  centered?: boolean;
  variant?: Variant;
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
      centered={centered ?? centeredContext}
      size={size ?? sizeContext}
      variant={variant ?? variantContext}
      style={{
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
