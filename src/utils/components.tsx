import fs from "fs";
import { render } from "@react-email/render";
import { getHighlighter, highlight } from "@utils/shiki";

type getComponentPropsOptions = {
  type: string;
};

export const getComponentProps = async ({ type }: getComponentPropsOptions) => {
  const highlighter = await getHighlighter();

  // Installation
  const sourceCodeRaw = fs.readFileSync(
    `./src/mailingui/components/${type}/${
      type.charAt(0).toUpperCase() +
      type.slice(1).replace(/-(\w)/g, (_, letter) => letter.toUpperCase())
    }.tsx`,
    "utf8"
  );
  const sourceCode = await highlight(highlighter, sourceCodeRaw, "tsx");

  // Basic Usage
  const Component = (await import(`src/examples/${type}/Demo.tsx`)).default;
  const html = render(<Component />, { pretty: true });
  const demoCodeRaw = fs.readFileSync(
    `./src/examples/${type}/Demo.tsx`,
    "utf8"
  );
  const demoCode = await highlight(highlighter, demoCodeRaw, "tsx");

  // Examples
  const filenames = fs
    .readdirSync(`./src/examples/${type}`)
    .filter((file) => file !== "Demo.tsx");
  const mdxFilenames = filenames.filter((file) => file.includes(".mdx"));
  const examples = await Promise.all(
    filenames
      .filter((file) => file.includes(".tsx"))
      .map(async (file) => {
        const name = file.replace(".tsx", "");
        const Component = (await import(`src/examples/${type}/${file}`))
          .default;
        const html = render(<Component />, { pretty: true });
        const demoCodeRaw = fs.readFileSync(
          `./src/examples/${type}/${file}`,
          "utf8"
        );
        const demoCode = await highlight(highlighter, demoCodeRaw, "tsx");
        const mdxFilename = mdxFilenames.find((file) => file.includes(name));
        if (mdxFilename) {
          const mdxRaw = fs.readFileSync(
            `./src/examples/${type}/${mdxFilename}`,
            "utf8"
          );
          const mdx = await highlight(highlighter, mdxRaw, "mdx");
          return {
            name,
            type,
            html,
            demoCode,
            mdx,
          };
        }

        return {
          name,
          type,
          html,
          demoCode,
        };
      })
  );

  const mdxFilename = mdxFilenames.find((file) => file.includes("Demo.mdx"));
  if (mdxFilename) {
    const mdxRaw = fs.readFileSync(
      `./src/examples/${type}/${mdxFilename}`,
      "utf8"
    );
    const mdx = await highlight(highlighter, mdxRaw, "mdx");
    return {
      type,
      html,
      demoCode,
      mdx,
      sourceCode,
      examples,
    };
  }

  return {
    type,
    html,
    demoCode,
    sourceCode,
    examples,
  };
};
