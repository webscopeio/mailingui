import * as React from "react";
import { MDXProvider } from "@mdx-js/react";

import { Row, Column, Img } from "@react-email/components";

import { Typography } from "../typography/Typography";
import { type Styles, cx } from "@mailingui/themes";

type MDXComponents = Parameters<typeof MDXProvider>[number]["components"];

function getComponents({
  components,
  styles,
  baseUrl,
}: {
  components: MDXComponents;
  styles: Styles;
  baseUrl?: string;
}): MDXComponents {
  const defaultComponents: MDXComponents = {
    h1: (props) => (
      <Typography.H1 style={cx(styles["global"], styles["h1"])} {...props} />
    ),
    h2: (props) => (
      <Typography.H2
        style={cx(styles["global"], styles["headings"], styles["h2"])}
        {...props}
      />
    ),
    h3: (props) => (
      <Typography.H3
        style={cx(styles["global"], styles["headings"], styles["h3"])}
        {...props}
      />
    ),
    h4: (props) => (
      <Typography.H4
        style={cx(styles["global"], styles["headings"], styles["h4"])}
        {...props}
      />
    ),
    p: (props) => (
      <Typography.P
        style={cx(styles["global"], styles["text"], styles["p"])}
        {...props}
      />
    ),
    blockquote: (props) => (
      <Typography.Blockquote
        style={cx(styles["global"], styles["text"], styles["blockquote"])}
        {...props}
      />
    ),
    hr: (props) => (
      <Typography.HR style={cx(styles["global"], styles["hr"])} {...props} />
    ),
    code: (props) => (
      <Typography.Code
        style={cx(styles["global"], styles["code"])}
        {...props}
      />
    ),
    a: (props) => (
      <Typography.Link
        style={cx(styles["global"], styles["a"])}
        {...props}
      />
    ),
    ul: (props) => (
      <Typography.UL style={cx(styles["global"], styles["ul"])} {...props} />
    ),
    ol: (props) => (
      <Typography.OL style={cx(styles["global"], styles["ol"])} {...props} />
    ),
    li: (props) => (
      <Typography.LI
        style={cx(styles["global"], styles["text"], styles["li"])}
        {...props}
      />
    ),
    img: (props) => (
      <div>
        <Img
          width={"100%"}
          src={`${baseUrl ?? ""}${props.src}`}
          alt={props.alt}
        />
        {props.title && (
          <Typography.P muted style={{ textAlign: "center", marginTop: "8px" }}>
            {props.title}
          </Typography.P>
        )}
      </div>
    ),
    Row: (props) => <Row {...props} />,
    Column: (props) => <Column {...props} />,
    Img: (props) => (
      <>
        <Img src={`${baseUrl ?? ""}${props.src}`} {...props} />
        {props.title && (
          <Typography.P
            muted
            style={{ textAlign: "center", marginTop: "8px", marginBottom: 0 }}
          >
            {props.title}
          </Typography.P>
        )}
      </>
    ),
    H1: (props) => <Typography.H1 {...props} />,
    H2: (props) => <Typography.H2 {...props} />,
    H3: (props) => <Typography.H3 {...props} />,
    H4: (props) => <Typography.H4 {...props} />,
    P: (props) => <Typography.P {...props} />,
    Blockquote: (props) => <Typography.Blockquote {...props} />,
    HR: (props) => <Typography.HR {...props} />,
    Code: (props) => <Typography.Code {...props} />,
    Link: (props) => <Typography.Link {...props} />,
    UL: (props) => <Typography.UL {...props} />,
    OL: (props) => <Typography.OL {...props} />,
    LI: (props) => <Typography.LI {...props} />,
  };
  return { ...defaultComponents, ...components };
}

export const Markdown: React.FC<
  React.PropsWithChildren<{
    components?: MDXComponents;
    styles?: Styles;
    baseUrl?: string;
  }>
> = ({ components, styles = {}, baseUrl, children }) => {
  return (
    <MDXProvider components={getComponents({ components, styles, baseUrl })}>
      {children}
    </MDXProvider>
  );
};
