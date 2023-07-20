import {
  CollapsibleContent,
  CollapsibleContentProps,
} from "@components/CollapsibleContent";

const defaultOptions: Omit<CollapsibleContentProps, "children"> = {
  expandLabel: "Show more",
  collapseLabel: "Hide section",
  className: "space-y-8 md:space-y-12",
  collapsedSize: "max-h-[260px]",
};

export const DocCollapsible = (props: CollapsibleContentProps) => {
  const resolvedProps = { ...defaultOptions, ...props };
  return <CollapsibleContent {...resolvedProps} />;
};
