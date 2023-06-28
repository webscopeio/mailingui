import {
  ComponentSourceTabs,
  ComponentSourceProps,
} from "./ComponentSourceTabs";
import { ComponentDemo } from "./ComponentDemo";
import { ComponentExampleList } from "./ComponentExampleList";
import { ComponentExampleItem } from "./ComponentExampleItem";
import { DocTabbedCode } from "./DocTabbedCode";
import { ProsePre } from "./ProsePre";
import * as DocTypography from "./DocTypography";
import { CTA } from "@components/CTA";

export const InstallationDocsMdxComponents = {
  ComponentDemo,
  ComponentSourceTabs,
  ComponentExampleItem,
  ComponentExampleList,
  DocTabbedCode,
  CTA,
  pre: ProsePre,
  h1: DocTypography.H1,
  h2: DocTypography.H2,
  h3: DocTypography.H3,
  p: DocTypography.P,
};
export { DocTypography, ProsePre, type ComponentSourceProps };
export { DocArticle } from "./DocArticle";
