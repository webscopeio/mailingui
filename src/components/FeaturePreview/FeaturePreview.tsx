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
    <div className="mt-8 md:hidden">
      <CTA href={cta.href} color="white" fullWidth>
        {cta.title}
      </CTA>
    </div>
    <div className="hidden md:mt-16 md:flex md:justify-center">
      <CTA href={cta.href} color="white">
        {cta.title}
      </CTA>
    </div>
  </section>
);
