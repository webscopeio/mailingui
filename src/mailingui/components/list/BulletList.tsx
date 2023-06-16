import React, {
  FC,
  CSSProperties,
  ReactNode,
  createContext,
  useContext,
} from "react";
import { useTheme } from "@mailingui/components";
import { type Variant } from "@mailingui/themes";

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
  variant?: Variant;
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
  const { fontFamily, variants } = useTheme();

  const style: CSSProperties = {
    padding: "2px 0",
    fontFamily,
    ...(variants ? variants[variant] : {}),
    ...sizes[size ?? sizeContext],
    ...styleProp,
  };

  return <li style={style}>{children}</li>;
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

export { BulletList, type BulletListProps, BulletListItem };
