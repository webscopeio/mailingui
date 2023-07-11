import { componentTypes } from "@examples";

export type DocsItem = {
  label: string;
  href?: string;
  items?: DocsItem[];
};

export const docsItems: DocsItem[] = [
  {
    label: "Overview",
    href: "/components",
  },
  {
    label: "Documentation",
    items: [
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
        href: `/components/${componentType.type}`,
        label: componentType.title,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  },
];
