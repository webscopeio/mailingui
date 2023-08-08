import { componentTypes } from "@examples";
import { templates } from "@templates";

export type DocItems = DocItemGroup[];
export type DocItemGroup = {
  label: string;
  href: string;
  items: DocItem[];
};
export type DocItem = {
  href: string;
  label: string;
  description?: string;
};

export const docsItems: DocItems = [
  {
    label: "Getting Started",
    href: "/docs/installation",
    items: [
      {
        href: "/docs/installation",
        label: "Installation",
        description: "Learn about the MailingUI",
      },
    ],
  },
  {
    label: "Components",
    href: "/docs/components",
    items: [
      {
        href: "/docs/components",
        label: "Overview",
        description: "Explore MailingUI components",
      },
      ...componentTypes
        .map((componentType) => ({
          href: `/docs/components/${componentType.type}`,
          label: componentType.title,
          description: componentType.subtitle,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    ],
  },
  {
    label: "Templates",
    href: "/docs/templates",
    items: templates.map((template) => ({
      href: `/docs/templates/${template.id}`,
      label: template.name,
      description: template.shortDescription,
    })),
  },
];

export const flattenedDocsItems = docsItems.reduce((acc, item) => {
  if (item.items) acc.push(...item.items);
  return acc;
}, [] as DocItem[]);
