/** Easily import `mjml` content with Webpack's `asset/source`. Check `next.config.js` to see it. */
declare module "*.mjml" {
  const content: string;

  export default content;
}
