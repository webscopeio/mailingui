import { Greeting } from "@components/Greeting";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { TemplatesPreview } from "@components/TemplatesPreview";
import { HomePreview } from "@components/HomePreview";

export default function Home() {
  return (
    <main className="mt-16 pb-32">
      <Greeting />

      <HomePreview
        linkHref="/components"
        buttonTitle="All Components"
        title="Build an eye-catching email with pre-made components"
        previewType="components"
      >
        <ComponentsPreview componentsShown={8} />
      </HomePreview>
      <HomePreview
        linkHref="/templates"
        buttonTitle="Explore Templates"
        title="Explore the templates and choose yours"
        previewType="templates"
      >
        <TemplatesPreview />
      </HomePreview>
    </main>
  );
}
