import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import nextMDX from "@next/mdx";

/** @type {import("rehype-pretty-code").Options} */
const prettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false
};

/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/installation",
        permanent: false
      },
      {
        source: "/docs/templates",
        destination: "/docs/templates/minimal",
        permanent: false
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
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeOptions],
      [rehypeSlug, {}],
    ],
  }
});

export default withMDX(nextConfig);
