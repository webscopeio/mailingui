import { componentTypes } from "@examples";

export type DocItems = DocItemGroup[];
export type DocItemGroup = {
  label: string;
  items: DocItem[];
};
export type DocItem = {
  href: string;
  label: string;
};

export const docsItems: DocItems = [
  {
    label: "Documentation",
    items: [
      {
        href: "/docs/overview",
        label: "Overview",
      },
      {
        href: "/docs/getting-started",
        label: "Getting Started",
      },
      {
        href: "/docs/installation",
        label: "Installation",
      },
      {
        href: "/docs/theming",
        label: "Theming",
      },
    ],
  },
  {
    label: "Components",
    items: componentTypes
      .map((componentType) => ({
        href: `/docs/components/${componentType.type}`,
        label: componentType.title,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  },
];
