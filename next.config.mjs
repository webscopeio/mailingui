import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import nextMDX from "@next/mdx";

/** @type {import("rehype-pretty-code").Options} */
const options = {
  theme: "github-dark",
  keepBackground: false
};

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs/components",
        destination: "/docs#components",
        permanent: true
      }
    ];
  },
  experimental: {
    appDir: true
  },
  staticPageGenerationTimeout: 300,

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

// Following the docs instruction: https://nextjs.org/docs/app/building-your-application/configuring/mdx#getting-started
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = nextMDX({
  options: {
    rehypePlugins: [[rehypePrettyCode, options], [rehypeSlug, {}], [rehypeAutolinkHeadings, { behaviour: 'wrap' }]]
  }
});

export default withMDX(nextConfig);
