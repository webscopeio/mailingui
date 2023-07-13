import {
  CollapsibleContent,
  CollapsibleContentProps,
} from "@components/CollapsibleContent";

const defaultOptions: Omit<CollapsibleContentProps, "children"> = {
  expandButtonEl: "Show more",
  collapseButtonEl: "Hide section",
  className: "space-y-8 md:space-y-12 border-l border-stone-700 pl-2 md:pl-4",
  collapsedSizeClassName: "max-h-[260px]",
};

export const DocCollapsible = (props: CollapsibleContentProps) => {
  const resolvedProps = { ...defaultOptions, ...props };
  return <CollapsibleContent {...resolvedProps} />;
};
