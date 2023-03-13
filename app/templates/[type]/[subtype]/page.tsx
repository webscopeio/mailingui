import TemplatesItem from "@/components/templatesItem/TemplatesItem";
import { emailTemplates } from "@/utils/constants";
import { readFileSync } from "fs";

type Props = {
  params: {
    type: string;
    subtype: string;
  };
};

function getTemplates(type: string, subtype: string) {
  const templateType = emailTemplates.find(
    (template) => template.type === type
  );

  const templates = templateType?.templates.find(
    (template) => template.route === subtype
  );

  if (!templates) throw new Error("No template type found");

  return {
    desktopPreview: readFileSync(templates.desktopPreview, "utf8"),
    mobilePreview: readFileSync(templates.mobilePreview, "utf8"),
  };
}

export default async function TemplateType({
  params: { type, subtype },
}: Props) {
  const { desktopPreview, mobilePreview } = getTemplates(type, subtype);
  return (
    <div className="w-full">
      <TemplatesItem
        desktopPreview={desktopPreview}
        mobilePreview={mobilePreview}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return emailTemplates.reduce((acc, item) => {
    const params = item.templates.map((template) => {
      return {
        type: item.type,
        subtype: template.route,
      };
    });

    acc = acc.concat(params);
    return acc;
  }, [] as Props["params"][]);
}
