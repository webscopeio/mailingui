import {
  getHighlighter as getHighlighterFromShiki,
  renderToHtml,
  type Highlighter,
  type Lang,
  type Theme,
} from "shiki";

/** ✅ Config */
const theme: Theme = "github-dark";
const langs: Lang[] = ["html", "tsx"];
const bg: React.CSSProperties["backgroundColor"] = "#011627";

export async function getHighlighter() {
  /** Preload NO languages in development */
  const isDevelopment = process.env.NODE_ENV === "development";

  /* ✅ Create a highlighter instance with a theme */
  return await getHighlighterFromShiki({
    theme,
    langs: isDevelopment ? [] : langs,
  });
}

export async function highlight(
  highlighter: Highlighter,
  code: string,
  lang: Lang = "tsx"
) {
  /** Request NO languages in development */
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
