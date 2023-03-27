import { Greeting } from "@components/Greeting";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { TemplatesPreview } from "@components/TemplatesPreview";
import { FeaturePreview } from "@components/FeaturePreview";

export default function Home() {
  return (
    <main className="mt-16 pb-32">
      <Greeting />

      <FeaturePreview
        cta={{
          href: "/components",
          title: "Explore Components",
        }}
        title="Build an eye-catching email with pre-made components"
        previewType="components"
      >
        <ComponentsPreview componentsShown={8} componentsShownOnMobile={3} />
      </FeaturePreview>

      <FeaturePreview
        cta={{
          href: "/templates",
          title: "Explore Templates",
        }}
        title="Explore the templates and choose yours"
        previewType="templates"
      >
        <TemplatesPreview />
      </FeaturePreview>
    </main>
  );
}
