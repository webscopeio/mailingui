import {
  getHighlighter as getHighlighterFromShiki,
  renderToHtml,
  type Highlighter,
  type Lang,
  type Theme,
} from "shiki";

/** ✅ Config */
const theme: Theme = "github-dark";
const defaultlangs: Lang[] = ["html", "tsx"];
const bg: React.CSSProperties["backgroundColor"] = "#011627";

const highlighterCache = new Map<string, Promise<Highlighter>>();

/**
 * Get a shiki highlighter instance.
 * Cached by theme and languages.
 */
export async function getHighlighter({
  langs = defaultlangs,
}: {
  langs?: Lang[];
} = {}): Promise<Highlighter> {
  const key = [theme, ...langs].join(",");
  if (!highlighterCache.has(key))
    highlighterCache.set(
      key,
      /* ✅ Create a highlighter instance with a theme */
      getHighlighterFromShiki({
        theme,
        langs,
      })
    );

  const promise = highlighterCache.get(key);
  if (!promise) throw new Error("Promise not found");
  return await promise;
}

/**
 * Highlight code string with provided shiki highlighter.
 * includeExplanation turned off to increase performance.
 */
export async function highlight(
  highlighter: Highlighter,
  code: string,
  lang: Lang = "tsx"
) {
  /* ✅ Highlight your code using the right syntax */
  const tokens = highlighter.codeToThemedTokens(code, lang, theme, {
    includeExplanation: false,
  });
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
