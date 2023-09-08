import * as React from "react";
import { Button as ReactEmailButton } from "@react-email/components";
import { cx } from "@mailingui/utils";

export const Button: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    href: string;
  }
> = ({ href, ...props }) => (
  <div
    style={cx([
      "global",
      {
        width: "100%",
        backgroundColor: "#171717",
        textAlign: "center",
      },
      props.style,
    ])}
  >
    <ReactEmailButton
      pY={16}
      href={href}
      style={cx([
        "global",
        "text",
        {
          width: "100%",
          color: "#fff",
          margin: 0,
        },
        props.style,
      ])}
    >
      {props.children}
    </ReactEmailButton>
  </div>
);
