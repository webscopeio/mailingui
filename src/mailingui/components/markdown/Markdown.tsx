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
  Row: (props) => <Row {...props} />,
  Column: (props) => <Column {...props} />,
  Link: (props) => <ReactEmailLink {...props} />,
  Img: (props) => <Img {...props} />,
};

export const Markdown: React.FC<
  React.PropsWithChildren<{
    components?: MDXComponents;
  }>
> = ({ components, children }) => {
  return (
    <MDXProvider components={{ ...defaultComponents, ...components }}>
      {children}
    </MDXProvider>
  );
};
