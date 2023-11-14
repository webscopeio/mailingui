import fs from "fs";
import { render } from "@react-email/render";
import { getHighlighter, highlight } from "@utils/shiki";

export const getTemplateProps = async (template: string) => {
  const highlighter = await getHighlighter();

  const filenames = fs.readdirSync(`./src/emails/${template}`);
  const mdxFilenames = filenames.filter((file) => file.includes(".mdx"));
  const templates = await Promise.all(
    filenames
      .filter((file) => file.includes(".tsx"))
      .map(async (file) => {
        const name = file.replace(".tsx", "");
        const Component = (await import(`src/emails/${template}/${file}`))
          .default;
        const html = render(<Component />, { pretty: true });
        const codeRaw = fs.readFileSync(
          `./src/emails/${template}/${file}`,
          "utf8"
        );
        const code = await highlight(highlighter, codeRaw, "tsx");
        const markup = await highlight(highlighter, html, "html");

        const mdxFilename = mdxFilenames.find((file) => file.includes(name));

        if (!mdxFilename) {
          return {
            name,
            html,
            code,
            markup,
          };
        }
        const mdxRaw = fs.readFileSync(
          `./src/emails/${template}/${mdxFilename}`,
          "utf8"
        );
        const mdx = await highlight(highlighter, mdxRaw, "mdx");
        return {
          name,
          html,
          code,
          markup,
          mdx,
        };
      })
  );

  return templates.reduce<
    Record<
      string,
      { html: string; code: string; markup: string; mdx: string | null }
    >
  >((res, template) => {
    res[template.name] = {
      html: template.html,
      code: template.code,
      markup: template.markup,
      mdx: template.mdx ?? null,
    };
    return res;
  }, {});
};
