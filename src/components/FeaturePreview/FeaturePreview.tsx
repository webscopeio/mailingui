import { CTA } from "@components/CTA";

export type FeaturePreviewProps = {
  children: React.ReactNode;
  cta: {
    href: string;
    title: string;
  };
  title: string;
  previewType: string;
};

export const FeaturePreview = ({
  children,
  cta,
  title,
  previewType,
}: FeaturePreviewProps) => (
  <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-32">
    <h2 className="mx-auto text-center md:max-w-[70%]">
      <div className="text-xs font-semibold uppercase text-dark-200 md:text-base">
        {previewType}
      </div>
      <div className="mx-auto mt-2 text-3xl font-semibold md:text-5xl">
        {title}
      </div>
    </h2>
    <div className="mt-8 md:mt-16">{children}</div>
    <div className="mt-8 w-full md:mt-16 md:flex md:justify-center">
      <CTA href={cta.href} color="white" className="w-full md:w-auto">
        {cta.title}
      </CTA>
    </div>
  </section>
);
