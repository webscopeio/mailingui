import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

export const ComponentExampleList = ({
  examples,
  hideDemo = true,
  items,
}: {
  examples: ComponentExampleProps[];
  hideDemo?: boolean;
  items?: ComponentExampleProps["id"][];
}) => {
  const filteredExamples = examples.filter((example) => {
    if (hideDemo && example.id === "Demo") return false;
    if (items) return items.includes(example.id);
    return true;
  });

  const orderedExamples = items
    ? filteredExamples.sort((a, b) => {
        return items.indexOf(a.id) - items.indexOf(b.id);
      })
    : filteredExamples;

  return (
    <div className="mt-8 space-y-16 md:mt-16">
      {orderedExamples.map(({ ...example }, index) => (
        <ComponentExample key={index} {...example} />
      ))}
    </div>
  );
};
