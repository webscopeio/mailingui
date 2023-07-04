import { ComponentExample } from "@components/ComponentExample";
import { getDemo } from "@components/InstallationDocs/utils";

export const ComponentDemo = async ({ type }: { type: string }) => {
  const demo = await getDemo(type);

  return (
    <div className="mt-16">
      <ComponentExample {...demo} headline="Basic usage" />
    </div>
  );
};
