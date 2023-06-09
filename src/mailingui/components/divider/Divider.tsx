import React, { CSSProperties, FC } from "react";
import { Hr } from "@react-email/components";

interface DividerProps {
  style?: CSSProperties;
}

const Divider: FC<DividerProps> = ({ style: styleProp }) => {
  const style: CSSProperties = {
    borderTop: "1px solid #CBD5E1",
    margin: "20px",
    width: undefined,
    ...styleProp,
  };

  return <Hr style={style} />;
};

export { Divider };
