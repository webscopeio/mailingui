import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

export const ComponentExampleList = ({
  examples,
  hideDemo = true,
  order,
}: {
  examples: ComponentExampleProps[];
  hideDemo?: boolean;
  order?: ComponentExampleProps["id"][];
}) => {
  const filteredExamples = examples.filter((example) => {
    if (hideDemo && example.id === "Demo") return false;
    if (order) return order.includes(example.id);
    return true;
  });

  const orderedExamples = order
    ? filteredExamples.sort((a, b) => {
        return order.indexOf(a.id) - order.indexOf(b.id);
      })
    : filteredExamples;

  return (
    <div className="not-prose mt-8 space-y-16 md:mt-16">
      {orderedExamples.map(({ ...example }, index) => (
        <ComponentExample key={index} {...example} />
      ))}
    </div>
  );
};
