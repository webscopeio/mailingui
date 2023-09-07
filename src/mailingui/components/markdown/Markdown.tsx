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
      <Typography.H1
        style={cx(["global", "headings", "h1"], { styles })}
        {...props}
      />
    ),
    h2: (props) => (
      <Typography.H2
        style={cx(["global", "headings", "h1"], { styles })}
        {...props}
      />
    ),
    h3: (props) => (
      <Typography.H3
        style={cx(["global", "headings", "h3"], { styles })}
        {...props}
      />
    ),
    h4: (props) => (
      <Typography.H4
        style={cx(["global", "headings", "h4"], { styles })}
        {...props}
      />
    ),
    p: (props) => (
      <Typography.P
        style={cx(["global", "text", "p"], { styles })}
        {...props}
      />
    ),
    blockquote: (props) => (
      <Typography.Blockquote
        style={cx(["global", "text", "blockquote"], { styles })}
        {...props}
      />
    ),
    hr: (props) => (
      <Typography.HR style={cx(["global", "hr"], { styles })} {...props} />
    ),
    code: (props) => (
      <Typography.Code style={cx(["global", "code"], { styles })} {...props} />
    ),
    a: (props) => (
      <Typography.Link style={cx(["global", "text", "a"], { styles })} {...props} />
    ),
    ul: (props) => (
      <Typography.UL style={cx(["global", "ul"], { styles })} {...props} />
    ),
    ol: (props) => (
      <Typography.OL style={cx(["global", "ol"], { styles })} {...props} />
    ),
    li: (props) => (
      <Typography.LI style={cx(["global", "text", "li"], { styles })} {...props} />
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
    H1: (props) => (
      <Typography.H1
        style={cx(["global", "headings", "h1"], { styles })}
        {...props}
      />
    ),
    H2: (props) => (
      <Typography.H2
        style={cx(["global", "headings", "h1"], { styles })}
        {...props}
      />
    ),
    H3: (props) => (
      <Typography.H3
        style={cx(["global", "headings", "h3"], { styles })}
        {...props}
      />
    ),
    H4: (props) => (
      <Typography.H4
        style={cx(["global", "headings", "h4"], { styles })}
        {...props}
      />
    ),
    P: (props) => (
      <Typography.P
        style={cx(["global", "text", "p"], { styles })}
        {...props}
      />
    ),
    Blockquote: (props) => (
      <Typography.Blockquote
        style={cx(["global", "text", "blockquote"], { styles })}
        {...props}
      />
    ),
    HR: (props) => (
      <Typography.HR style={cx(["global", "hr"], { styles })} {...props} />
    ),
    Code: (props) => (
      <Typography.Code style={cx(["global", "code"], { styles })} {...props} />
    ),
    Link: (props) => (
      <Typography.Link style={cx(["global", "text", "a"], { styles })} {...props} />
    ),
    UL: (props) => (
      <Typography.UL style={cx(["global", "ul"], { styles })} {...props} />
    ),
    OL: (props) => (
      <Typography.OL style={cx(["global", "ol"], { styles })} {...props} />
    ),
    LI: (props) => (
      <Typography.LI style={cx(["global", "text", "li"], { styles })} {...props} />
    ),
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
