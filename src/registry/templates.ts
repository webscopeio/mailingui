import { type StaticImageData } from "next/image";

import events1 from "/public/images/templates-docs/events-1.png";
import events2 from "/public/images/templates-docs/events-2.png";
import events3 from "/public/images/templates-docs/events-3.png";
import marketing1 from "/public/images/templates-docs/marketing-1.png";
import marketing2 from "/public/images/templates-docs/marketing-2.png";
import marketing3 from "/public/images/templates-docs/marketing-3.png";
import newsletter1 from "/public/images/templates-docs/newsletter-1.png";
import newsletter2 from "/public/images/templates-docs/newsletter-2.png";
import newsletter3 from "/public/images/templates-docs/newsletter-3.png";

type Template = {
  id: string;
  price: string;
  github: string;
  title: string;
  description: string;
  categories: TemplateCategory[];
  downloadHref: string;
};

type TemplateCategory = {
  title: string;
  description: string;
  imageUrls: StaticImageData[];
  href: string;
  downloadHref: string;
};

export const templates: Template[] = [
  {
    id: "minimal",
    price: "Free and open-sourced",
    github: "MailingUI",
    title: "Minimal",
    description: "Minimal calls for a simple and clean design.",
    downloadHref:
      "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/webscopeio/mailingui/tree/main/src/emails/minimal",
    categories: [
      {
        title: "Events",
        description:
          "Events are a great way to get people together. Can be conference, a meetup, or a party.",
        href: "/templates/minimal/events",
        imageUrls: [events1, events2, events3],
        downloadHref:
          "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/webscopeio/mailingui/tree/main/src/emails/minimal/events",
      },
      {
        title: "Marketing",
        description:
          "Marketing emails are a great way to promote your business with product announcement or a special offer.",
        href: "/templates/minimal/marketing",
        imageUrls: [marketing1, marketing2, marketing3],
        downloadHref:
          "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/webscopeio/mailingui/tree/main/src/emails/minimal/marketing",
      },
      {
        title: "Newsletter",
        description:
          "Newsletters are a great way to keep your audience up-to-date with what's going on in your business.",
        href: "/templates/minimal/newsletter",
        imageUrls: [newsletter1, newsletter2, newsletter3],
        downloadHref:
          "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/webscopeio/mailingui/tree/main/src/emails/minimal/newsletter",
      },
    ],
  },
];
