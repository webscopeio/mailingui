import Image from "next/image";
import { Greeting } from "@components/Greeting";
import { ComponentsPreview } from "@components/ComponentsPreview";
import { FeaturePreview } from "@components/FeaturePreview";
import templatesPreview from "public/static/images/templates-preview.png";

const Home = () => (
  <main className="mt-16">
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

    <FeaturePreview title="Templates coming soon!" previewType="templates">
      <div className="relative -mx-4 overflow-hidden">
        <Image
          src={templatesPreview}
          alt="Screenshot of various templates"
          quality={100}
          className="relative left-1/2 w-full min-w-[540px] -translate-x-1/2 px-4"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.35)_50.1%,#000000_100%)]">
          <div className="bg-pink-to-purple-gradient bg-clip-text text-3xl font-bold uppercase text-transparent drop-shadow-lg sm:text-6xl">
            Coming soon
          </div>
        </div>
      </div>
    </FeaturePreview>
  </main>
);

export default Home;
