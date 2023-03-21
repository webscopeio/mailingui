"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  subtitle: string;
  type: string;
};

export const ComponentsPreviewItem = ({
  image,
  title,
  subtitle,
  type,
}: Props) => (
  <Link href={`/components/${type}`} className="hover:opacity-70">
    <Image src={image} alt={title} className="rounded-md" quality={100} />
    <h3 className="mt-5 text-base font-medium text-white">{title}</h3>
    <p className="text-sm text-dark-100">{subtitle}</p>
  </Link>
);
