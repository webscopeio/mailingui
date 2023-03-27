import Image from "next/image";
import { Greeting } from "@components/Greeting";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { FeaturePreview } from "@components/FeaturePreview";
import templatesPreview from "public/static/images/templates-preview.png";

const Home = () => (
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
      <div className="-mx-4 overflow-hidden">
        <Image
          src={templatesPreview}
          alt="Screenshot of various templates"
          quality={100}
          className="relative left-1/2 w-full min-w-[540px] -translate-x-1/2 px-4"
        />
      </div>
    </FeaturePreview>
  </main>
);

export default Home;
