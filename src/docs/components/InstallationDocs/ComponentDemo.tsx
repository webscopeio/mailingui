import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

export const ComponentDemo = ({ demo }: { demo: ComponentExampleProps }) => {
  return (
    <div className="mt-16">
      <ComponentExample {...demo} headline="Basic usage" />
    </div>
  );
};
