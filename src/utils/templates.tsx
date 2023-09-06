import fs from "fs";
import { render } from "@react-email/render";
import { getHighlighter, highlight } from "@utils/shiki";

type getTemplatePropsOptions = {
  template: string;
  category: string;
};

export const getTemplateProps = async ({
  template,
  category,
}: getTemplatePropsOptions) => {
  const highlighter = await getHighlighter();

  // Examples
  const filenames = fs.readdirSync(`./src/emails/${template}/${category}`);
  const mdxFilenames = filenames.filter((file) => file.includes(".mdx"));
  const examples = await Promise.all(
    filenames
      .filter((file) => file.includes(".tsx"))
      .map(async (file) => {
        const name = file.replace(".tsx", "");
        const Component = (
          await import(`src/emails/${template}/${category}/${file}`)
        ).default;
        const html = render(<Component />, { pretty: true });
        const demoCodeRaw = fs.readFileSync(
          `./src/emails/${template}/${category}/${file}`,
          "utf8"
        );
        const demoCode = await highlight(highlighter, demoCodeRaw, "tsx");
        const markup = await highlight(highlighter, html, "html");

        const mdxFilename = mdxFilenames.find((file) => file.includes(name));
        if (mdxFilename) {
          const mdxRaw = fs.readFileSync(
            `./src/emails/${template}/${category}/${mdxFilename}`,
            "utf8"
          );
          const mdx = await highlight(highlighter, mdxRaw, "mdx");
          return {
            name,
            html,
            demoCode,
            markup,
            mdx,
          };
        }

        return {
          name,
          html,
          demoCode,
          markup,
        };
      })
  );

  return {
    examples,
  };
};
