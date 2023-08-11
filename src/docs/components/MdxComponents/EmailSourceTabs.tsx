import { TabbedCode, TabbedCodeItem } from "@components/Code";
import { getContentEmail } from "@components/MdxComponents/utils";

export type ComponentSourceTabsProps = {
  emailId: string;
};

export const EmailSourceTabs = async ({
  emailId,
}: ComponentSourceTabsProps) => {
  const emailSource = await getContentEmail(emailId);

  const tabs: TabbedCodeItem[] = [
    {
      id: `${emailSource.id}.tsx`,
      htmlCode: emailSource.source,
    },
  ];
  return (
    <div className="relative overflow-hidden rounded-md">
      <TabbedCode
        tabs={tabs}
        collapsedClassName="max-h-[350px]"
        className="min-h-[350px]"
      ></TabbedCode>
    </div>
  );
};
