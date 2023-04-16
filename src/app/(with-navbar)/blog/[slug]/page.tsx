import { readFileSync } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { blogDir, type PostFrontMatter } from "@constants";

type BlogPostProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params: { slug } }: BlogPostProps) {
  const { content, frontmatter } = await getPost(blogDir, slug);

  return (
    <div className="mx-auto w-full max-w-[900px] px-4">
      <h1 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
        {frontmatter.title}
      </h1>
      <article className="prose prose-invert mx-auto mt-8 max-w-none lg:prose-xl md:mt-16">
        {content}
      </article>
    </div>
  );
}

async function getPost(blogDir: string, slug: string) {
  const file = readFileSync(path.join(blogDir, slug + ".mdx"), "utf8");
  return await compileMDX<PostFrontMatter>({
    source: file,
    options: { parseFrontmatter: true },
  });
}
