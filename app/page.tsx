import Greetings from "@/components/greetings/Greetings";
import ComponentsPreview from "@/components/componentsPreview/ComponentsPreview";
import TemplatesPreview from "@/components/templatesPreview/TemplatesPreview";
import HomePreview from "@/components/homePreview/HomePreview";

export default function Home() {
  return (
    <main className="mt-16 pb-32">
      <Greetings />

      <HomePreview
        PreviewElement={ComponentsPreview}
        linkHref="/components"
        buttonTitle="All Components"
        title="Build an eye-catching email with pre-made components"
        previewType="components"
      />
      <HomePreview
        PreviewElement={TemplatesPreview}
        linkHref="/components"
        buttonTitle="Explore Templates"
        title="Explore the templates and choose yours"
        previewType="templates"
      />
    </main>
  );
}
