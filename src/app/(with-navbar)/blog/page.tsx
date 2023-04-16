import { readdirSync, readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { blogDir, type PostFrontMatter } from "@constants";

export default async function Blog() {
  const posts = await getPostsFrontMatter(blogDir);

  return (
    <div className="mx-auto w-full max-w-[900px] px-4">
      <h1 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">Blog</h1>
      <section className="mx-auto mt-8 grid gap-4 md:mt-16 md:grid-cols-2">
        {posts.map(({ title, date, description, slug }, i) => (
          <Link
            key={i}
            href={`/blog/${slug}`}
            className="group block no-underline md:h-48"
          >
            <div className="relative flex h-full items-end rounded-3xl border-2 border-white p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#fff]">
              <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
                <span className="m-0 text-3xl font-semibold" aria-hidden="true">
                  {date}
                </span>
                <p className="mt-1 text-xl font-semibold sm:text-2xl">
                  {title}
                </p>
              </div>
              <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                <p className="text-2xl font-bold">{title}</p>
                <p className="mt-2 text-lg font-medium leading-tight">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

async function getPostsFrontMatter(blogDir: string) {
  const files = readdirSync(blogDir);
  return await Promise.all(
    files.map(async (file) => {
      const markdownWithMeta = readFileSync(path.join(blogDir, file), "utf-8");
      const {
        frontmatter: { title, date, description },
      } = await compileMDX<PostFrontMatter>({
        source: markdownWithMeta,
        options: { parseFrontmatter: true },
      });
      return {
        title,
        date,
        description,
        slug: file.replace(".mdx", ""),
      };
    })
  );
}
