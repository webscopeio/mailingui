import { Column, Row } from "@react-email/components";
import * as React from "react";
import { Img, Link } from "../typography/Typography";

export const IconRow: React.FC<{
  compact?: boolean;
  align?: React.ComponentPropsWithoutRef<"table">["align"];
  fullWidth?: boolean;
  icons: {
    href: string;
    src: string;
    text?: string;
  }[];
  iconGap?: Extract<React.CSSProperties["gap"], number>;
  iconWidth?: Extract<React.CSSProperties["width"], number>;
}> = ({
  compact = false,
  align = "left",
  fullWidth = false,
  icons,
  iconGap = 16,
  iconWidth = 24,
}) => {
  const colWidth = iconWidth + iconGap;
  return (
    <Row
      align={align}
      style={{ width: fullWidth ? "100%" : colWidth * icons.length }}
    >
      {icons.map(({ href, src, text }, i) => (
        <Column
          align="center"
          key={i}
          style={{
            paddingRight: fullWidth || i === icons.length - 1 ? 0 : iconGap,
          }}
          width={fullWidth ? `${100 / icons.length - 1}%` : undefined}
        >
          <Link style={{ textDecoration: "none" }} href={href}>
            <Img
              compact={compact || Boolean(text)}
              caption={text}
              width={iconWidth}
              src={src}
            />
          </Link>
        </Column>
      ))}
    </Row>
  );
};
