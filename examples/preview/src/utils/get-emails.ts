import { promises as fs } from "fs";
import path from "path";

const CONTENT_DIR = "emails";

export const getEmails = async () => {
  const emailsDirectory = path.join(process.cwd(), CONTENT_DIR);
  const filenames = await fs.readdir(emailsDirectory);
  const emails = filenames
    .filter((file) => /\.(jsx|tsx)$/g.test(file))
    .map((file) => file.replace(/\.(jsx|tsx)$/g, ""));
  return { emails };
};
