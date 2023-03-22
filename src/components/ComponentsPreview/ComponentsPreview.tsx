import { ComponentsPreviewItem } from "./ComponentsPreviewItem";
import { emailComponents } from "@constants";

export type ComponentsPreviewProps = {
  isHomepage?: boolean;
  componentsShown?: number;
};

export const ComponentsPreview = ({
  isHomepage = true,
  componentsShown,
}: ComponentsPreviewProps) => (
  <div className="relative mx-6 grid max-w-[1344px] grid-cols-4 gap-12 max-2xl:gap-6 max-md:gap-4 max-sm:grid-cols-2">
    {!isHomepage && (
      <h2 className="absolute top-[-104px] self-start text-4xl font-bold max-xl:top-[-74px] max-xl:text-2xl">
        Explore components
      </h2>
    )}
    {emailComponents
      .slice(0, componentsShown)
      .map(({ image, title, subtitle, type }) => (
        <ComponentsPreviewItem
          key={title}
          image={image}
          title={title}
          subtitle={subtitle}
          type={type}
        />
      ))}
  </div>
);
