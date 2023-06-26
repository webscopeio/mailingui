import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";

export const InstallationDemo = ({
  demoData,
}: {
  demoData?: ComponentExampleProps;
}) => {
  if (!demoData) return null;
  return <ComponentExample {...demoData} headline="Basic usage" />;
};
