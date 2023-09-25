import { Column, Row } from "@react-email/components";
import * as React from "react";
import { Img, Link } from "../typography/Typography";

export const IconRow: React.FC<{
  align?: React.ComponentPropsWithoutRef<"table">["align"];
  fullWidth?: boolean;
  icons: {
    href: string;
    src: string;
    text?: string;
  }[];
  iconGap?: Extract<React.CSSProperties["gap"], number>;
  iconWidth?: Extract<React.CSSProperties["width"], number>;
}> = ({ align = "left", fullWidth = false, icons, iconGap = 16, iconWidth = 24 }) => {
  const colWidth = iconWidth + iconGap;
  return (
    <Row align={align} style={{ width: fullWidth ? "100%" : colWidth * icons.length }}>
      {icons.map(({ href, src, text }, i) => (
        <Column align="center" key={i} style={{ paddingRight: iconGap }} width={iconWidth}>
          <Link style={{ textDecoration: "none" }} href={href}>
            <Img compact={Boolean(text)} caption={text} width={iconWidth} src={src} />
          </Link>
        </Column>
      ))}
    </Row>
  );
};
