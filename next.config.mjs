import rehypePrettyCode from "rehype-pretty-code";
import nextMDX from '@next/mdx'
import { getHighlighter as getHighlighterFromShiki } from "shiki";

/** ✅ Config */
const theme = "github-dark";
const defaultlangs = ["html", "tsx"];

async function getHighlighter({
  langs = defaultlangs,
} = {}) {
  /** Preload NO languages in development */
  const isDevelopment = process.env.NODE_ENV === "development";

  /* ✅ Create a highlighter instance with a theme */
  return await getHighlighterFromShiki({
    theme,
    langs: isDevelopment ? [] : langs,
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  staticPageGenerationTimeout: 300,

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// Following the docs instruction: https://nextjs.org/docs/app/building-your-application/configuring/mdx#getting-started
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = nextMDX({
  options: {
    rehypePlugins: [
      rehypePrettyCode,
      {
        getHighlighter: () =>
          getHighlighter({ langs: ["html", "tsx", "bash", "json"] }),
        keepBackground: false,
      },
    ],
  },
});

export default withMDX(nextConfig);
