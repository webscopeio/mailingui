import React, {
  FC,
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { Column, Row } from "@react-email/components";
import { Text, type TextProps, useTheme } from "@mailingui/components";
import { type Variant } from "@mailingui/themes";

type ListContextType = {
  direction: "vertical" | "horizontal";
  centered: boolean;
  size: TextProps["size"];
  titleSize?: TextProps["size"];
  titleStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  variant: Variant;
};

const ListContext = createContext<ListContextType>({
  direction: "vertical",
  centered: false,
  size: "md",
  titleSize: undefined,
  variant: "default",
});

type SharedProps = {
  centered?: boolean;
  titleSize?: TextProps["size"];
  size?: TextProps["size"];
  style?: CSSProperties;
  variant?: Variant;
  titleStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  children?: ReactNode;
};

export type ListProps = SharedProps & {
  horizontal?: boolean;
};

const List: FC<ListProps> = ({
  style,
  size,
  centered,
  titleSize,
  variant,
  horizontal,
  titleStyle,
  bodyStyle,
  children,
}) => {
  const [state, _setState] = useState<ListContextType>({
    direction: horizontal ? "horizontal" : "vertical",
    centered: !!centered,
    size: size ?? "md",
    titleSize,
    variant: variant ?? "default",
    titleStyle,
    bodyStyle,
  });

  return (
    <ListContext.Provider value={state}>
      <Row style={{ ...style }}>{children}</Row>
    </ListContext.Provider>
  );
};

type ListItemProps = SharedProps & {
  title?: ReactNode;
};

const ListItem: FC<ListItemProps> = ({
  style,
  size: sizeProp,
  title,
  centered,
  titleStyle,
  bodyStyle,
  titleSize,
  variant,
  children,
}) => {
  const {
    direction,
    centered: centeredContext,
    size: sizeContext,
    titleSize: titleSizeContext,
    titleStyle: titleStyleContext,
    bodyStyle: bodyStyleContext,
    variant: variantContext,
  } = useContext(ListContext);
  const { variants } = useTheme();
  const sharedStyle: CSSProperties = {
    ...(variants ? { color: variants[variant ?? variantContext].color } : null),
  };

  const Wrapper = direction === "vertical" ? Row : Column;

  return (
    <Wrapper style={{ verticalAlign: "top", ...style }}>
      {title ? (
        <Text
          centered={centered ?? centeredContext}
          size={titleSize ?? titleSizeContext ?? sizeProp ?? sizeContext}
          style={{
            fontWeight: 700,
            margin: 0,
            marginBottom: "4px",
            ...sharedStyle,
            ...titleStyleContext,
            ...titleStyle,
          }}
        >
          {title}
        </Text>
      ) : null}
      <Text
        centered={centered ?? centeredContext}
        size={sizeProp ?? sizeContext}
        style={{
          margin: 0,
          marginBottom: "24px",
          ...sharedStyle,
          ...bodyStyleContext,
          ...bodyStyle,
        }}
      >
        {children}
      </Text>
    </Wrapper>
  );
};

export { List as Root, ListItem as Item };
