export type Template = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  categories: TemplateCategory[];
};

type TemplateCategory = {
  name: string;
  description: string;
  imageUrl: string[];
  href: string;
};
