import { ComponentExample } from "@components/ComponentExample";
import { getComponentExampleProps } from "@components/InstallationDocs/utils";

export const ComponentDemo = async ({ type }: { type: string }) => {
  const demo = await getComponentExampleProps(type, "Demo");

  return (
    <div className="mt-16">
      <ComponentExample {...demo} headline="Basic usage" />
    </div>
  );
};
