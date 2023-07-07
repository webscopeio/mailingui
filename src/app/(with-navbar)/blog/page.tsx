import Link from "next/link";
import { type Metadata } from "next";
import { blogDir, getPosts } from "@lib/mdx";
import {
  openGraphImageSize,
  sharedOpenGraphMetadata,
} from "src/app/shared-metadata";

export const metadata: Metadata = {
  title: "Blog",
  description: "All about MailingUI",
  openGraph: {
    ...sharedOpenGraphMetadata,
    title: "Blog",
    description: "All about MailingUI",
    url: "https://mailingui.com/blog",
    images: [
      {
        ...openGraphImageSize,
        url: "/static/images/og/blog.png",
      },
    ],
  },
};

export default async function Blog() {
  const posts = await getPosts(blogDir);
  const includeLatestPost = posts.length > 1;
  const latestPost = includeLatestPost
    ? posts.splice(0, 1)[0]
    : posts.slice(0, 1)[0];

  return (
    <div className="mx-auto w-full max-w-[900px] px-4 py-8">
      <header className="grid gap-y-8 py-10">
        {includeLatestPost ? (
          <article className="group relative grid place-content-start space-y-2 transition-opacity hover:opacity-80">
            <span className="text-sm text-dark-100">
              <time dateTime={latestPost.date}>{latestPost.date}</time>
            </span>
            <h3 className="text-4xl font-semibold md:text-6xl">
              <Link href={`/blog/${latestPost.slug}`}>
                <span className="absolute inset-0" />
                {latestPost.title}
              </Link>
            </h3>
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <p className="line-clamp-2 text-dark-100">
              {latestPost.description}
            </p>
          </article>
        ) : (
          <div className="space-y-3">
            <h3 className="text-4xl font-semibold md:text-6xl">
              From the blog
            </h3>
            <p className=" text-dark-100">
              More news and blog posts coming soon...
            </p>
          </div>
        )}
      </header>
      <section className="grid grid-cols-1 gap-x-4 gap-y-8 border-t border-gray-500/50 py-10 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group relative grid place-content-start space-y-2 transition-opacity hover:opacity-80"
          >
            <span className="text-sm text-dark-100">
              <time dateTime={post.date}>{post.date}</time>
            </span>
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <h3 className="line-clamp-2 text-2xl font-medium md:text-xl">
              <Link href={`/blog/${post.slug}`}>
                <span className="absolute inset-0" />
                {post.title}
              </Link>
            </h3>
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <p className="line-clamp-2 text-dark-100">{post.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
