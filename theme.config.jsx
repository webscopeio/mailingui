/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { MailingUILogo } from "@components/MailingUILogo";
import { Footer } from "@components/shared/Footer";

const theme = {
  logo: <MailingUILogo />,
  project: {
    link: "https://github.com/webscopeio/mailingui",
  },
  chat: {
    link: "https://twitter.com/mailingui",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    ),
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: "dark",
  },
  primaryHue: 330,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – MailingUI",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const url = "https://mailingui.com" + asPath;

    const ogImage = asPath.includes("/blog")
      ? "images/og/blog.png"
      : asPath.includes("/docs")
      ? "images/og/components.png"
      : asPath.includes("/feedback")
      ? "images/og/feedback.png"
      : asPath.includes("/templates")
      ? "images/og/templates.png"
      : "images/og/homepage.png";

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "MailingUI"} />
        <meta
          property="og:description"
          content={
            frontMatter.description || "Create emails powered by open-source"
          }
        />
        <meta property="og:image" content={ogImage} />
        <link rel="shortcut icon" href="favicons/favicon-512.png"></link>
        <link
          rel="icon"
          href="favicons/favicon-32.svg"
          type="image/svg+xml"
        ></link>
        <link rel="icon" href="favicons/favicon-32.ico" sizes="any"></link>
        <link rel="apple-touch-icon" href="favicons/favicon-512.png"></link>
        <script
          defer=""
          data-domain="mailingui.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </>
    );
  },
  feedback: {
    useLink: () => "/feedback",
  },
  docsRepositoryBase: "https://github.com/webscope/mailingui/tree/main",
  footer: {
    component: <Footer />,
  },
};

export default theme;
