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
    preview: readFileSync(templates.preview, "utf8"),
  };
}

export default function TemplateType({ params: { theme, scenario } }: Props) {
  const { preview } = getTemplates(theme, scenario);
  return (
    <div className="w-full">
      <TemplatesItem desktopPreview={preview} mobilePreview={preview} />
    </div>
  );
}

export function generateStaticParams() {
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
