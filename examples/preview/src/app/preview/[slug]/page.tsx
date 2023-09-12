import { promises as fs } from "fs";
import * as React from "react";
import { render } from "@react-email/render";
import { getEmails } from "../../../utils/get-emails";
import Preview from "./preview";

export const dynamicParams = true;

export async function generateStaticParams() {
  const { emails } = await getEmails();

  const paths = emails.map((email) => {
    return { slug: email };
  });

  return paths;
}

export default async function Page({ params }) {
  const { emails } = await getEmails();

  const Email = (await import(`/emails/${params.slug}`)).default;
  const markup = render(<Email />, { pretty: true });
  const plainText = render(<Email />, { plainText: true });
  const reactMarkup: string = await fs.readFile(
    `./emails/${params.slug}.tsx`,
    "utf-8"
  );

  return (
    <Preview
      navItems={emails}
      slug={params.slug}
      markup={markup}
      reactMarkup={reactMarkup}
      plainText={plainText}
    />
  );
}

export async function generateMetadata({ params }) {
  return { title: `${params.slug} — React Email` };
}
