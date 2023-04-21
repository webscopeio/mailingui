/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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

  webpack: (config) => {
    config.module.rules.push({
      resolve: {
        alias: {
          /**
           * Ignore `uglify-js` module used in `mjml` package to avoid
           * "Uncaught Error: ENOENT: no such file or directory, open '(sc_server)/./node_modules/uglify-js/lib/utils.js'".
           * There are still several webpack warnings, including "Critical dependency: the request of a dependency is an expression",
           * but since we use `mjml` on server side (as it should be used!), these warnings are not breaking anything.
           */
          "uglify-js": false,
        },
      },
    });

    config.module.rules.push({
      test: /\.mjml/,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = nextConfig;
