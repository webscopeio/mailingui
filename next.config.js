/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
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
const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
