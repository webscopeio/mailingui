import React, {
  FC,
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { Column, Row } from "@react-email/components";
import { Text, type TextProps } from "@mailingui/components";

type ListContextType = {
  direction: "vertical" | "horizontal";
  centered: boolean;
  size: TextProps["size"];
};

const ListContext = createContext<ListContextType>({
  direction: "vertical",
  centered: false,
  size: "md",
});

export type ListProps = {
  centered?: boolean;
  size?: TextProps["size"];
  style?: CSSProperties;
  horizontal?: boolean;
  children?: ReactNode;
};

const List: FC<ListProps> = ({
  style,
  size,
  centered,
  horizontal,
  children,
}) => {
  const [state, _setState] = useState<ListContextType>({
    direction: horizontal ? "horizontal" : "vertical",
    centered: !!centered,
    size: size || "md",
  });

  return (
    <ListContext.Provider value={state}>
      <Row style={{ ...style }}>{children}</Row>
    </ListContext.Provider>
  );
};

type ListItemProps = {
  style?: CSSProperties;
  size?: TextProps["size"];
  titleSize?: TextProps["size"];
  title?: ReactNode;
  children?: ReactNode;
};

const ListItem: FC<ListItemProps> = ({
  style,
  size: sizeProp,
  title,
  titleSize,
  children,
}) => {
  const { direction, centered, size: sizeContext } = useContext(ListContext);
  const size = sizeProp || sizeContext;

  const Wrapper = direction === "vertical" ? Row : Column;

  return (
    <Wrapper style={{ verticalAlign: "top", ...style }}>
      {title ? (
        <Text
          centered={centered}
          size={titleSize || size}
          style={{ fontWeight: 700, margin: 0, marginBottom: "4px" }}
        >
          {title}
        </Text>
      ) : null}
      <Text
        centered={centered}
        size={size}
        style={{ margin: 0, marginBottom: "24px" }}
      >
        {children}
      </Text>
    </Wrapper>
  );
};

export { List as Root, ListItem as Item };
