import fs from "fs";
import { render } from "@react-email/render";
import { getHighlighter, highlight } from "@utils/shiki";

export const getComponentProps = async (type: string, filename: string) => {
  const sourceCode = await getSourceCode(type, filename);
  const examples = await getExamplesProps(type);

  return { sourceCode, examples };
};

export const getSourceCode = async (type: string, filename: string) => {
  const highlighter = await getHighlighter();

  const codeRaw = fs.readFileSync(
    `./src/mailingui/components/${type}/${filename}`,
    "utf8"
  );
  return await highlight(highlighter, codeRaw, "tsx");
};

export const getExamplesProps = async (type: string) => {
  const highlighter = await getHighlighter();

  const filenames = fs.readdirSync(`./src/examples/${type}`);
  const mdxFilenames = filenames.filter((file) => file.includes(".mdx"));

  const examples = await Promise.all(
    filenames
      .filter((file) => /\.(tsx|jsx)$/.test(file))
      .map(async (file) => {
        const Component = (await import(`src/examples/${type}/${file}`))
          .default;
        const html = render(<Component />, { pretty: true });
        const codeRaw = fs.readFileSync(
          `./src/examples/${type}/${file}`,
          "utf8"
        );
        const code = await highlight(highlighter, codeRaw, "tsx");
        const markup = await highlight(highlighter, html, "html");

        const name = file.replace(/\.[a-zA-Z0-9]+$/, "");
        const mdxFilename = mdxFilenames.find((file) => file.includes(name));

        if (!mdxFilename) {
          return {
            name,
            html,
            code,
            markup
          };
        }

        const mdxRaw = fs.readFileSync(
          `./src/examples/${type}/${mdxFilename}`,
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

  return examples.reduce<
    Record<
      string,
      { html: string; code: string; markup: string; mdx: string | null }
    >
  >((res, example) => {
    res[example.name] = {
      html: example.html,
      code: example.code,
      markup: example.markup,
      mdx: example.mdx ?? null,
    };
    return res;
  }, {});
};
