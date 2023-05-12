# Mailing UI

## Description

Mailing UI is an _open source_ collection of email components (templates coming soon!) that can help you save time and improve your email campaigns.

All of the components are designed to be visually appealing and easy to use. The [MJML](https://mjml.io/) markup language was used to reduce the pain of coding a responsive email.

Since the Mailing UI is open source, you can use any part of it for free and modify it to suit your needs!

The project is an MVP. We plan on adding new features in the near future.

### Technology stack

Email components are created using the [MJML](https://mjml.io/) markup language, which is being compiled to HTML using the official [`mjml` npm package](https://www.npmjs.com/package/mjml).

The website is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). We use the experimental (beta) [app](https://beta.nextjs.org/docs/routing/defining-routes) directory. The email components are showcased on the website.

## Dependencies

- Node.js - recommended version is the LTS 'Hydrogen' - `18.x.x`. (The table of releases: https://nodejs.org/en/download/releases)
- npm - recommended version is the one described next to Node.js version. For example, recommended npm version for Node.js `18.16.0` is `9.5.1`.

## Installation

Detailed instructions on how to install, configure, and get the project running.
This should be frequently tested to ensure reliability. Alternatively, link to
a separate [INSTALL](INSTALL.md) document.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

- [Contribution Guide](contributing.md)

---

## Open source licensing info

- [LICENSE](LICENSE)

---

## References

- To better understand the MJML language visit [the documentation](https://documentation.mjml.io/).
