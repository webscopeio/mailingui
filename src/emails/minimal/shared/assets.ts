/**
 * Production domain name, without the protocol scheme `https://`
 */
const DOMAIN = "mailingui.com";

/**
 * Deployment URL params for assets
 */
const ASSETS_DIR = "static/minimal";

/**
 * Base URL for email assets
 * 
 * If development assets will be `/assets-dir`
 * 
 * If preview build will be `https://preview.com/assets-dir`
 * 
 * If production will be `https://production.com/assets-dir`
 */
export const baseUrl = `${
  process.env.NODE_ENV === "development"
    ? ""
    : `https://${process.env.VERCEL_URL ?? DOMAIN}`
}/${ASSETS_DIR}`;
