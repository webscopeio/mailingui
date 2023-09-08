import { Tabs, Tab } from "nextra/components";
import { useData } from "nextra/data";
import { Preview } from "@components/shared/Preview";
import { Codeblock } from "@components/shared/Codeblock";

export const BasicUsage = () => {
  const { type, html, demoCode, mdx } = useData();
  return (
    <Tabs items={mdx ? ["Preview", "Code", "MDX"] : ["Preview", "Code"]}>
      <Tab>
        <Preview type={type} html={html} />
      </Tab>
      <Tab>
        <Codeblock code={demoCode} />
      </Tab>
      {mdx && (
        <Tab>
          <Codeblock code={mdx} lang={"mdx"} />
        </Tab>
      )}
    </Tabs>
  );
};
