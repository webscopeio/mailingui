export type DocsItem = {
  label: string;
  href?: string;
  items?: DocsItem[];
};

// Temp fix duplication, when imported from src/docs/examples/index.ts it cause import errors through dynamic import of examples
const componentTypes = [
  {
    type: "hero-sections",
    title: "Hero section",
  },
  {
    type: "lists",
    title: "Lists",
  },
  {
    type: "badges",
    title: "Badges",
  },
  {
    type: "buttons",
    title: "Buttons",
  },
  {
    type: "emojis",
    title: "Emojis",
  },
  {
    type: "social-icons",
    title: "Social icons",
  },
  {
    type: "texts",
    title: "Paragraphs",
  },
  {
    type: "dividers",
    title: "Dividers",
  },
];

export const docsItems: DocsItem[] = [
  {
    label: "Documentation",
    items: [
      {
        href: "/components",
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
        href: `/components/${componentType.type}`,
        label: componentType.title,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  },
];
