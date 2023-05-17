import Image from "next/image";
import { type Metadata } from "next";
import { blogDir, getPost, getPosts } from "@lib/mdx";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: BlogPostProps): Promise<Metadata> {
  const { frontmatter } = await getPost(blogDir, slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://mailingui.vercel.app/blog/${frontmatter.slug}`,
      siteName: "MailingUI",
      locale: "en-US",
      type: "website",
    },
  };
}

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const { content, frontmatter } = await getPost(blogDir, slug);

  return (
    <div className="mx-auto w-full max-w-[900px] px-4 py-8">
      <header className="grid gap-y-2 py-10">
        <div className="flex gap-2 text-sm text-neutral-500">
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
          <span>·</span>
          <div className="space-x-1">
            <span>by</span>
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {frontmatter.author}
            </span>
          </div>
        </div>
        <h1 className="text-2xl font-semibold md:text-6xl">
          {frontmatter.title}
        </h1>
      </header>
      <article className="prose prose-invert mx-auto max-w-none lg:prose-lg prose-headings:font-medium prose-p:font-light prose-p:text-neutral-300">
        {content}
      </article>
      <footer className="mt-9 flex gap-3 border-t border-gray-500/50 pt-9">
        <Image
          width={50}
          height={50}
          alt={frontmatter.author}
          src={
            frontmatter?.github
              ? `http://avatars.githubusercontent.com/${frontmatter.github}`
              : "https://github.com/identicons/webscopeio.png"
          }
          className="overflow-hidden rounded-full"
        />
        <div className="grid gap-1 text-neutral-500">
          <div className="space-x-1">
            <span>Written by</span>
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {frontmatter.author}
            </span>
          </div>
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        </div>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts(blogDir);
  return posts.map(({ slug }) => ({ slug }));
}
