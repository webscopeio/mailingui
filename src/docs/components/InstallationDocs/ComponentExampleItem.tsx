import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

export const ComponentExampleItem = ({
  example,
}: {
  example: ComponentExampleProps;
}) => {
  return (
    <div className="not-prose mt-16">
      <ComponentExample {...example} />
    </div>
  );
};
