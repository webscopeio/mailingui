import { getComponentExamples } from "./utils";
import { ComponentExample } from "@components/ComponentExample";

export const ComponentExamples = async ({ type }: { type: string }) => {
  const examples = await getComponentExamples(type);
  return (
    <>
      <div className="mt-8 space-y-16 md:mt-16">
        {examples.map(({ ...example }, index) => (
          <ComponentExample key={index} {...example} type={type} />
        ))}
      </div>
    </>
  );
};
