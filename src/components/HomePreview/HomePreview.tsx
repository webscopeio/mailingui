import { PrimaryLink } from "@components/PrimaryLink";

export type HomePreviewProps = {
  children: React.ReactNode;
  linkHref: string;
  buttonTitle: string;
  title: string;
  previewType: "components" | "templates";
};

export const HomePreview = ({
  children,
  linkHref,
  buttonTitle,
  title,
  previewType,
}: HomePreviewProps) => (
  <section className="mx-auto mt-32 flex flex-col items-center justify-center">
    <div className="mb-16 flex-col text-center">
      <p className="text-2xl font-semibold uppercase text-dark-300 max-md:text-base">
        {previewType}
      </p>
      <h2
        className={`mx-auto ${
          previewType === "components" ? "max-w-4xl" : "max-w-2xl"
        } pt-4 text-[56px] font-bold leading-[68px] max-lg:max-w-[70%] max-lg:text-[42px] max-lg:leading-[36px] max-md:text-[28px]`}
      >
        {title}
      </h2>
    </div>
    {children}
    <PrimaryLink href={linkHref} className="mt-10">
      {buttonTitle}
    </PrimaryLink>
  </section>
);
