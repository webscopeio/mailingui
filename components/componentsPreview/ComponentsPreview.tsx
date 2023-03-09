import ComponentsPreviewItem from "../componentsPreviewItem/ComponentsPreviewItem";
import { emailComponents } from "@/utils/constants";

type Props = {
  isHomepage?: boolean;
};

export default function ComponentsPreview({ isHomepage = true }: Props) {
  const maxItems = isHomepage ? 8 : emailComponents.length;
  return (
    <div className="relative mx-6 grid max-w-[1344px] grid-cols-4 gap-12 max-2xl:gap-6 max-md:gap-4 max-sm:grid-cols-2">
      {!isHomepage && (
        <h2 className="absolute top-[-104px] self-start text-4xl font-bold max-xl:top-[-74px] max-xl:text-2xl">
          Explore components
        </h2>
      )}
      {emailComponents
        .slice(0, maxItems)
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
}
