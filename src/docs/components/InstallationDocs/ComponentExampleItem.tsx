import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

export const ComponentExampleItem = ({
  examples,
  example,
  headline,
}: {
  examples: ComponentExampleProps[];
  example: ComponentExampleProps["id"];
  headline?: string;
}) => {
  const selectedExample = examples.find(
    (exampleItem) => exampleItem.id === example
  );
  if (!selectedExample) return null;

  return (
    <div className="not-prose mt-16">
      <ComponentExample {...selectedExample} headline={headline} />
    </div>
  );
};
