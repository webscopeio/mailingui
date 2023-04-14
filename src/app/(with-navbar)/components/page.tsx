import { ComponentsPreview } from "@components/ComponentsPreview";

const Components = () => (
  <div className="mx-auto w-full max-w-6xl px-4">
    <h1 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
      Explore components
    </h1>
    <div className="mt-8 md:mt-16">
      <ComponentsPreview preloadImages={true} />
    </div>
  </div>
);

export default Components;
