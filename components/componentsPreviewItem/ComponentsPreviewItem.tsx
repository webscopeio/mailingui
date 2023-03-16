import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  subtitle: string;
};

export default function ComponentsPreviewItem({
  image,
  title,
  subtitle,
}: Props) {
  return (
    <div>
      <Image src={image} alt={title} className="rounded-md" quality={100} />
      <h3 className="mt-5 text-base font-medium text-white">{title}</h3>
      <p className="text-sm text-dark-100">{subtitle}</p>
    </div>
  );
}
