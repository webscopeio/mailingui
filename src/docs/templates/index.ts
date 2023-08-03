import type { Template } from "./types";

export type { Template };

export const templates: Template[] = [
  {
    id: "minimal",
    name: "Minimal",
    shortDescription: "Free email template",
    description:
      "Minimal is a simple and clean email template. It comes with three different email categories.",
    categories: [
      {
        name: "Events",
        description:
          "Events are a great way to get people together. Can be conference, a meetup, or a party.",
        href: "/preview/events",
        imageUrl: [
          "/static/images/templates-docs/events-1.png",
          "/static/images/templates-docs/events-2.png",
          "/static/images/templates-docs/events-3.png",
        ],
      },
      {
        name: "Marketing",
        description:
          "Marketing emails are a great way to promote your business with product announcement or a special offer.",
        href: "/preview/marketing",
        imageUrl: [
          "/static/images/templates-docs/marketing-1.png",
          "/static/images/templates-docs/marketing-2.png",
          "/static/images/templates-docs/marketing-3.png",
        ],
      },
      {
        name: "Newsletter",
        description:
          "Newsletters are a great way to keep your audience up-to-date with what's going on in your business.",
        href: "/preview/newsletter",
        imageUrl: [
          "/static/images/templates-docs/newsletter-1.png",
          "/static/images/templates-docs/newsletter-2.png",
          "/static/images/templates-docs/newsletter-3.png",
        ],
      },
    ],
  },
];
