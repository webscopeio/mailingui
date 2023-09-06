import * as React from "react";
import { Button as ReactEmailButton } from "@react-email/components";
import { theme } from "@mailingui/themes";

const { typography } = theme;

export const Button: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <div
    style={{
      margin: `${typography.typeFlow}px 0`,
      backgroundColor: "#171717",
      width: "100%",
      textAlign: "center",
    }}
  >
    <ReactEmailButton
      pY={16}
      href={href}
      style={{
        width: "100%",
        fontSize: "17px",
        color: "#fff",
        fontFamily:
          "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
      }}
    >
      {children}
    </ReactEmailButton>
  </div>
);
