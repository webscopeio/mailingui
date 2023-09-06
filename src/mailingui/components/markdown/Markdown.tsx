import * as React from "react";
import { MDXProvider } from "@mdx-js/react";

import {
  Row,
  Column,
  Link as ReactEmailLink,
  Img,
} from "@react-email/components";

import {
  H1,
  H2,
  H3,
  H4,
  P,
  UL,
  OL,
  LI,
  Blockquote,
  InlineCode,
  HR,
  Link,
} from "../typography/Typography";

type MDXComponents = Parameters<typeof MDXProvider>[number]["components"];

function getComponents({
  components,
  baseUrl,
}: {
  components: MDXComponents;
  baseUrl?: string;
}): MDXComponents {
  const defaultComponents: MDXComponents = {
    h1: (props) => <H1 {...props} />,
    h2: (props) => <H2 {...props} />,
    h3: (props) => <H3 {...props} />,
    h4: (props) => <H4 {...props} />,
    p: (props) => <P {...props} />,
    ul: (props) => <UL {...props} />,
    ol: (props) => <OL {...props} />,
    li: (props) => <LI {...props} />,
    blockquote: (props) => <Blockquote {...props} />,
    code: (props) => <InlineCode {...props} />,
    hr: (props) => <HR {...props} />,
    a: (props) => <Link {...props} />,
    img: (props) => (
      <div style={{ margin: "24px 0" }}>
        <Img
          width={"100%"}
          src={`${baseUrl ?? ""}${props.src}`}
          alt={props.alt}
        />
        {props.title && (
          <P muted compact style={{ textAlign: "center" }}>
            {props.title}
          </P>
        )}
      </div>
    ),
    Subtle: (props) => <P compact muted {...props} />,
    Row: (props) => <Row {...props} />,
    Column: (props) => <Column {...props} />,
    Link: (props) => <ReactEmailLink {...props} />,
    Img: (props) => (
      <>
        <Img src={`${baseUrl ?? ""}${props.src}`} {...props} />
        {props.title && (
          <P muted compact style={{ textAlign: "center" }}>
            {props.title}
          </P>
        )}
      </>
    ),
  };
  return { ...defaultComponents, ...components };
}

export const Markdown: React.FC<
  React.PropsWithChildren<{
    components?: MDXComponents;
    baseUrl?: string;
  }>
> = ({ components, baseUrl, children }) => {
  return (
    <MDXProvider components={getComponents({ components, baseUrl })}>
      {children}
    </MDXProvider>
  );
};
