import TemplatesItem from "@/components/templatesItem/TemplatesItem";
import { emailTemplates } from "@/utils/constants";
import { readFileSync } from "fs";

type Props = {
  params: {
    theme: string;
    scenario: string;
  };
};

function getTemplates(theme: string, scenario: string) {
  const templateType = emailTemplates.find(
    (template) => template.type === theme
  );

  const templates = templateType?.templates.find(
    (template) => template.route === scenario
  );

  if (!templates) throw new Error("No template type found");

  return {
    desktopPreview: readFileSync(templates.desktopPreview, "utf8"),
    mobilePreview: readFileSync(templates.mobilePreview, "utf8"),
  };
}

export default async function TemplateType({
  params: { theme, scenario },
}: Props) {
  const { desktopPreview, mobilePreview } = getTemplates(theme, scenario);
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
        theme: item.type,
        scenario: template.route,
      };
    });

    return [...acc, ...params];
  }, [] as Props["params"][]);
}
