import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { TabbedCode, TabbedCodeItem } from "@components/Code";
import { getHighlighter, highlight } from "@lib/shiki";

export type DocTabsItem =
  | {
      id: string;
      code: string;
    }
  | {
      id: string;
      path: string;
    };

export const DocTabbedCode = async ({ tabs = [] }: { tabs: DocTabsItem[] }) => {
  const highlighter = await getHighlighter();

  const codeTabs: TabbedCodeItem[] = await Promise.all(
    tabs.map(async (tabData) => {
      const rawCode = await getTabCode(tabData);
      if (!rawCode)
        return {
          id: tabData.id,
          htmlCode: "",
        };
      const source = await highlight(highlighter, rawCode);
      return {
        id: tabData.id,
        htmlCode: source,
      };
    })
  );

  return (
    <div className="relative overflow-hidden rounded-md">
      <TabbedCode
        tabs={codeTabs}
        collapsedClassName="max-h-[350px]"
        className="min-h-[350px]"
      ></TabbedCode>
    </div>
  );
};

async function getTabCode(tabData: DocTabsItem) {
  if ("code" in tabData) return tabData.code;

  const resolvedPath = join(process.cwd(), "src", tabData.path);
  if (!existsSync(resolvedPath)) {
    return null;
  }

  const data = readFileSync(resolvedPath, "utf8");
  return data;
}
