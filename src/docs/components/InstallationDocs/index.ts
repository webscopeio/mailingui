import { InstallationSource, ComponentSourceProps } from "./InstallationSource";
import { ComponentExampleList } from "./ComponentExampleList";
import { ProsePre } from "./ProsePre";
import { ComponentExample } from "@components/ComponentExample";
import { CTA } from "@components/CTA";

export const InstallationDocsMdxComponents = {
  InstallationSource,
  ComponentExample,
  ComponentExampleList,
  CTA,
  pre: ProsePre,
};
export { ProsePre, type ComponentSourceProps };
export { DocArticle } from "./DocArticle";
