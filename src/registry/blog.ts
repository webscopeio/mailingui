type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  github: string;
};

// This Registry MUST match the Blog Post's frontmatter (except slug)
export const blogPostRegistry: BlogPost[] = [
  {
    slug: "001-introducing-mailingui",
    title: "Introducing MailingUI",
    date: "2022-06-03T00:00:00Z",
    description: "An open source collection of email components and templates",
    github: "jvorcak",
  },
  {
    slug: "002-caching-shiki-for-faster-build-times",
    title: "Caching Shiki for Faster Build Times",
    description:
      "Shiki is arguably the most popular syntax highlighter out there. How can we improve its performance?",
    date: "2023-08-14T00:00:00Z",
    github: "iamhectorsosa",
  },
];