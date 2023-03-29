import { ComponentsPreview } from "@components/ComponentsPreview";

const Components = () => (
  <div className="mx-auto mt-16 w-full max-w-6xl px-4 md:mt-24">
    <h1 className="text-4xl font-semibold">Explore components</h1>
    <div className="mt-8 md:mt-16">
      <ComponentsPreview preloadImages={true} />
    </div>
  </div>
);

export default Components;
