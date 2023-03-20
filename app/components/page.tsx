import ComponentsPreview from "@/components/componentsPreview/ComponentsPreview";

export default function Components() {
  return (
    <div className="mx-auto mt-40 flex flex-col items-center justify-center max-xl:mt-28">
      <ComponentsPreview isHomepage={false} />
    </div>
  );
}
