const DOMAIN = "mailingui.com";
const ASSETS_DIR = "static/minimal";
export const baseUrl = `${
  process.env.NODE_ENV === "development"
    ? ""
    : `https://${process.env.VERCEL_URL ?? DOMAIN}`
}/${ASSETS_DIR}`;
