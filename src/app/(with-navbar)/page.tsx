import { Greeting } from "@components/Greeting";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { FeaturePreview } from "@components/FeaturePreview";
import { NewsletterForm } from "@components/NewsletterForm";
import { TemplatesPreview } from "@components/TemplatesPreview";
import { ConfettiWrapper } from "@components/ConfettiWrapper";

const Home = () => (
  <ConfettiWrapper>
    <main className="mt-16">
      <Greeting />
      <NewsletterForm />
      <FeaturePreview
        cta={{
          href: "/docs/components",
          title: "Explore All Components",
        }}
        title="Build an eye-catching email with pre-made components"
        previewType="components"
      >
        <ComponentsPreview componentsShown={8} componentsShownOnMobile={3} />
      </FeaturePreview>

      <FeaturePreview
        title="Explore the templates and choose yours"
        previewType="templates"
      >
        <TemplatesPreview />
      </FeaturePreview>
    </main>
  </ConfettiWrapper>
);

export default Home;
