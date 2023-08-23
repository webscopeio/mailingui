/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/guide/introduction",
        permanent: false,
      },
      {
        source: "/docs/guide",
        destination: "/docs/guide/introduction",
        permanent: false,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/overview",
        permanent: false,
      },
      {
        source: "/templates",
        destination: "/templates/minimal/overview",
        permanent: false,
      },
      {
        source: "/templates/minimal",
        destination: "/templates/minimal/overview",
        permanent: false,
      },
    ];
  },
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

/** @type {import('nextra').NextraConfig} */
const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
};

const withNextra = require("nextra")(nextraConfig);

module.exports = withNextra(nextConfig);
