import * as React from "react";

import { Tab, Tabs } from "nextra/components";
import { useData } from "nextra/data";

import { TestForm } from "./TestForm";

import { Preview } from "@components/shared/Preview";

export const PremiumTemplate: React.FC<{
  id: string;
  height?: number;
}> = ({ id, height }) => {
  const { templates } = useData() as {
    templates: Array<{ id: string; html: string }>;
  };
  const template = templates.find((template) => template.id === id);

  if (!template) return null;

  return (
    <Tabs items={["Preview", "Test"]}>
      <Tab>
        <Preview html={template.html} height={height} />
      </Tab>
      <Tab>
        <TestForm html={template.html} />
      </Tab>
    </Tabs>
  );
};
