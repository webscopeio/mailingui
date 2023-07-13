import {
  CollapsibleContent,
  CollapsibleContentProps,
} from "@components/CollapsibleContent";

const defaultOptions: Omit<CollapsibleContentProps, "children"> = {
  expandLabel: "Show more",
  collapseLabel: "Hide section",
  className:
    "space-y-8 md:space-y-12 border-l md:border-l-2 border-neutral-800 pl-2 md:pl-4",
  collapsedSize: "max-h-[260px]",
};

export const DocCollapsible = (props: CollapsibleContentProps) => {
  const resolvedProps = { ...defaultOptions, ...props };
  return <CollapsibleContent {...resolvedProps} />;
};
