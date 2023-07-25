import { componentTypes } from "@examples";

export type DocItems = DocItemGroup[];
export type DocItemGroup = {
  label: string;
  items: DocItem[];
};
export type DocItem = {
  href: string;
  label: string;
  description?: string;
};

export const docsItems: DocItems = [
  {
    label: "Documentation",
    items: [
      {
        href: "/docs/overview",
        label: "Overview",
        description: "Learn about the MailingUI",
      },
      {
        href: "/docs/getting-started",
        label: "Getting Started",
        description: "How to use MailingUI",
      },
      {
        href: "/docs/installation",
        label: "Installation",
        description: "How to install MailingUI",
      },
      {
        href: "/docs/theming",
        label: "Theming",
        description: "Theming MailingUI",
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

export const flattenedDocsItems = docsItems.reduce((acc, item) => {
  if (item.items) acc.push(...item.items);
  return acc;
}, [] as DocItem[]);
