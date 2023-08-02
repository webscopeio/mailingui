import { readFileSync } from "fs";
import {
  getHighlighter as getHighlighterFromShiki,
  renderToHtml,
  type Highlighter,
  type Lang,
  type Theme,
  type ILanguageRegistration,
} from "shiki";

/** ✅ Config */
const theme: Theme = "github-dark";
const bg: React.CSSProperties["backgroundColor"] = "#011627";

export async function getHighlighter() {
  /** Preload NO languages in development */
  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    return await getHighlighterFromShiki({
      theme,
      langs: [],
    });
  }

  const typescriptGrammar = JSON.parse(
    readFileSync("./src/docs/lib/langs/TypeScriptReact.tmLanguage.json", "utf8")
  );
  const htmlGrammer = JSON.parse(
    readFileSync("./src/docs/lib/langs/html.json", "utf8")
  );

  const localTypescript: ILanguageRegistration = {
    id: "typescript-react",
    scopeName: "source.tsx",
    aliases: ["tsx"],
    grammar: typescriptGrammar,
    path: "./langs/TypeScriptReact.tmLanguage.json",
  };

  const localHtml: ILanguageRegistration = {
    id: "html",
    scopeName: "text.html.basic",
    aliases: ["html"],
    grammar: htmlGrammer,
    path: "./langs/html.json",
  };

  /* ✅ Create a highlighter instance with a theme */
  const highlighter = await getHighlighterFromShiki({
    theme,
  });
  await highlighter.loadLanguage(localTypescript);
  await highlighter.loadLanguage(localHtml);
  return highlighter;
}

export async function highlight(
  highlighter: Highlighter,
  code: string,
  lang: Lang = "tsx"
) {
  /** Preload NO languages in development */
  const isDevelopment = process.env.NODE_ENV === "development";

  /* ✅ Highlight your code using the right syntax */
  const tokens = highlighter.codeToThemedTokens(
    code,
    isDevelopment ? "" : lang,
    theme
  );
  /* ⚠️ Optional: Custom rendering of code blocks */
  return renderToHtml(tokens, {
    bg,
    elements: {
      pre({ className, style, children }) {
        return `<pre class="${className}" style="${style}">${children}</pre>`;
      },
      line({ children, className, index }) {
        return `<span data-line=${index + 1}
         class=${className}>${children}</span>`;
      },
    },
  });
}
