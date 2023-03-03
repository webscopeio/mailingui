import ComponentsPreviewItem from "../componentsPreviewItem/ComponentsPreviewItem";
import { componentList } from "@/utils/constants";

export default function ComponentsPreview() {
  return (
    <div className="mx-6 grid max-w-[1344px] grid-cols-4 gap-12 max-2xl:gap-6 max-md:gap-4 max-sm:grid-cols-2">
      {componentList.map(({ image, title, subtitle }) => (
        <ComponentsPreviewItem
          key={title}
          image={image}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </div>
  );
}
