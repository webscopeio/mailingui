import React, { CSSProperties, FC, ReactNode } from "react";

type MinimalButtonProps = {
  href: string;
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  children?: ReactNode;
};

export const MinimalButton: FC<MinimalButtonProps> = ({
  href,
  width = 520,
  height = 56,
  backgroundColor = "#000000",
  color = "#ffffff",
  children,
}) => {
  return (
    <div>
      <span
        dangerouslySetInnerHTML={{
          __html:
            "<!--[if mso]>\n" +
            `  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:${height}px;v-text-anchor:middle;width:${width}px;" fillcolor="${backgroundColor}">\n` +
            "    <w:anchorlock/>\n" +
            `    <center style="color:${color};font-family:sans-serif;font-size:13px;font-weight:bold;">Reset password</center>\n` +
            "  </v:rect>\n" +
            "<![endif]-->",
        }}
      />
      <a
        href={href}
        style={
          {
            backgroundColor: backgroundColor,
            border: "1px solid #1e3650",
            color: color,
            display: "inline-block",
            lineHeight: `${height}px`,
            textAlign: "center",
            width: `${width}px`,
            textDecoration: "none",
            fontWeight: 600,
            msoHide: "all",
          } as CSSProperties
        }
      >
        {children}
      </a>
    </div>
  );
};
